document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre.astro-code").forEach((pre) => {
    const codeBlock = pre.querySelector("code");
    if (!codeBlock) return;

    const button = document.createElement("button");
    button.className = "copy-button";
    button.textContent = "Copy";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 2000);
      });
    });

    const wrapper = document.createElement("div");
    wrapper.className = "code-wrapper";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    wrapper.appendChild(button);
  });
});
