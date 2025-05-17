import { useEffect } from "react";

export default function MouseParticles() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 9999;
    canvas.style.pointerEvents = "none";

    document.body.appendChild(canvas);

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    let particles = [];

    window.addEventListener("mousemove", (e) => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          radius: Math.random() * 4 + 2,
          opacity: 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          life: 60,
        });
      }
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.life--;
        p.opacity = p.life / 60;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`; // Tailwind green-500 glow
        ctx.fill();
      });

      particles = particles.filter((p) => p.life > 0);

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
}
