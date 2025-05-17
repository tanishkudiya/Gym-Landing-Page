import { useEffect, useRef } from "react";
import { FaDumbbell, FaUserAlt, FaHeartbeat } from "react-icons/fa";

const features = [
  {
    icon: <FaUserAlt className="text-2xl text-white" />,
    title: "Certified Trainers",
    description:
      "Our team of certified personal trainers bring years of experience and are passionate about helping you achieve your fitness goals. They provide tailored workout programs, expert guidance on technique, and ongoing motivation to keep you accountable and progressing safely.",
  },
  {
    icon: <FaDumbbell className="text-2xl text-white" />,
    title: "State-of-the-Art Equipment",
    description:
      "Our gym is equipped with the latest, high-quality fitness machines and free weights. Whether you're focusing on strength training, cardio, or flexibility, we have the tools to support every workout. Regular maintenance ensures a clean, safe, and effective environment for all members.",
  },
  {
    icon: <FaHeartbeat className="text-2xl text-white" />,
    title: "Health & Wellness Support",
    description:
      "We go beyond workouts by offering comprehensive wellness services. From personalized nutrition plans to recovery therapies and wellness coaching, our holistic approach helps you build sustainable, healthy habits for life. We’re here to support your fitness journey every step of the way.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const circles = Array.from(container.querySelectorAll(".moving-circle"));
    circles.forEach((circle, i) => {
      const duration = 14000 + i * 3000;
      circle.style.animationDuration = `${duration}ms`;
    });
  }, []);

  return (
  <section
    ref={containerRef}
    className="w-full relative py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden"
  >
    {/* Animated background circles */}
    {[...Array(6)].map((_, i) => (
      <span
        key={i}
        className="moving-circle absolute rounded-full bg-green-300 dark:bg-green-700 opacity-20"
        style={{
          width: `${60 + i * 30}px`,
          height: `${60 + i * 30}px`,
          top: `${-30 + i * 40}px`,
          left: `${-40 + i * 100}px`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationName: "floatMove",
        }}
      />
    ))}

    <div className="relative z-10 container mx-auto px-4 md:px-6">
      <p className="text-green-600 dark:text-green-400 md:text-3xl font-semibold md:my-3 text-center">
        Our Commitment
      </p>
      <h2 className="relative text-3xl font-bold tracking-tighter text-center mt-2 mb-4 cursor-pointer group">
        Why Choose <span className="text-green-900 dark:text-green-300">Our Gym</span>?
        <span className="block h-1 bg-green-900 dark:bg-green-300 mx-auto rounded transition-all duration-300 ease-in-out w-16 group-hover:w-80"></span>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
        Discover what makes us the best choice for your fitness journey. Our facilities, trainers, and wellness services are designed with your success and wellbeing in mind.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-green-700 dark:hover:border-white hover:scale-105 transition-transform transition-colors ease-in-out duration-300 bg-white dark:bg-gray-800 shadow-sm p-6"
          >
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 dark:bg-green-500 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl text-gray-800 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Keyframes for background circle movement */}
    <style jsx>{`
      @keyframes floatMove {
        0% {
          transform: translateX(0) translateY(0);
        }
        50% {
          transform: translateX(100vw) translateY(10vh);
        }
        100% {
          transform: translateX(0) translateY(0);
        }
      }
    `}</style>
  </section>
);
}
