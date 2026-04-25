document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".sparkles");

  function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    sparkle.style.animationDuration = 3 + Math.random() * 4 + "s";
    sparkle.style.opacity = Math.random();

    container.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 7000);
  }

  setInterval(createSparkle, 250);
});