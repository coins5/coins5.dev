const imageImports = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

export function getImage(path: string) {
  return imageImports[path]?.default;
}
