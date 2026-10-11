#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const MAX_LINES = 350;
const WARN_LINES = 300;
const DIRS_TO_CHECK = ["src/features", "src/components", "src/pages", "src/layouts"];
const EXTENSIONS = [".astro", ".ts", ".tsx", ".js", ".mjs"];

let hasErrors = false;
let fileCount = 0;

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n").length;
  fileCount++;

  if (lines > MAX_LINES) {
    console.error(`❌ [EXCEEDED BUDGET] ${filePath}: ${lines} lines (Limit: ${MAX_LINES})`);
    hasErrors = true;
  } else if (lines > WARN_LINES) {
    console.warn(`⚠️ [NEAR BUDGET] ${filePath}: ${lines} lines (Warning threshold: ${WARN_LINES})`);
  }
}

function traverseDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      traverseDir(fullPath);
    } else if (entry.isFile() && EXTENSIONS.some((ext) => entry.name.endsWith(ext))) {
      checkFile(fullPath);
    }
  }
}

console.log(`\n🔍 Checking line budget (Max: ${MAX_LINES} lines per file)...`);

for (const dir of DIRS_TO_CHECK) {
  traverseDir(dir);
}

console.log(`\nAudited ${fileCount} files.`);

if (hasErrors) {
  console.error("\n❌ Line budget check failed! Some files exceed the 350-line maximum limit.\nModularize into sub-components or extract content to *.content.ts as defined in ARCHITECTURE.md.\n");
  process.exit(1);
} else {
  console.log("✅ All audited files adhere to the strict line budget!\n");
  process.exit(0);
}
