export function enableImageZoom() {
  const images = document.querySelectorAll<HTMLImageElement>(".zoomable-image");

  const overlay = document.createElement("div");
  overlay.classList.add("image-overlay");
  document.body.appendChild(overlay);

  const zoomedImg = document.createElement("img");
  overlay.appendChild(zoomedImg);

  images.forEach((img) => {
    img.addEventListener("click", () => {
      zoomedImg.src = img.src;
      overlay.classList.add("active");
    });
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
}
