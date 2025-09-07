const canvas = document.getElementById("stars-bg");
const ctx = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = "+1";
canvas.style.pointerEvents = "none";

const STAR_COUNT = 80;
const stars = [];

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    color: "rgba(189, 197, 33, 0.8)", // amarillo dorado
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let star of stars) {
    star.x += star.dx;
    star.y += star.dy;

    // Rebote en los bordes
    if (star.x < 0 || star.x > width) star.dx *= -1;
    if (star.y < 0 || star.y > height) star.dy *= -1;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.fill();
  }
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

document.getElementById("copyEmail").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("adriaqf@gmail.com");
  var toast = document.getElementById("toast");
  toast.style.display = "block";
  setTimeout(function () {
    toast.style.display = "none";
  }, 2000);
});
