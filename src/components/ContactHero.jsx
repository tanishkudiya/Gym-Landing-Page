import { useEffect, useRef } from "react";

export default function ContactHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const circles = Array.from(container.querySelectorAll(".moving-circle"));
    
    circles.forEach((circle, i) => {
      const duration = 15000 + i * 5000; // stagger different speeds
      circle.style.animationDuration = `${duration}ms`;
    });
  }, []);

  return (
    <section className="relative bg-green-800 text-white py-20 overflow-hidden" ref={containerRef}>
      {/* Moving circles background */}
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="moving-circle absolute rounded-full bg-green-700 opacity-20"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            top: `${-40 + i * 30}px`,
            left: `${-40 + i * 50}px`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationName: "floatMove",
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Fitness?</h2>
        <p className="max-w-2xl mx-auto text-lg font-light mb-8">
          Join PulseFit Gym today! Our expert trainers and modern facilities are here to help you reach your fitness goals with personalized coaching and dynamic classes.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-white text-green-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book a Session
          </a>
          <a
            href="#classes"
            className="bg-white text-green-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            View Our Classes
          </a>
        </div>
      </div>

      {/* Add keyframes for floatMove animation */}
      <style jsx>{`
        @keyframes floatMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(120vw) translateY(20vh);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
