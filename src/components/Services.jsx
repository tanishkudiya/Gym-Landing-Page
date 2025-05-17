import { useState } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Personal Training",
      description:
        "Our certified personal trainers tailor workouts to your goals, whether it's fat loss, muscle building, or improved performance.",
      points: [
        "One-on-One Coaching",
        "Goal-Oriented Plans",
        "Progress Tracking",
        "Flexible Scheduling",
      ],
      icon: "🏋️‍♂️",
    },
    {
      title: "Group Fitness Classes",
      description:
        "Stay motivated and energized with dynamic group classes including HIIT, Zumba, yoga, and strength circuits.",
      points: [
        "Daily Group Sessions",
        "Beginner to Advanced Levels",
        "Cardio & Strength Options",
        "Certified Instructors",
      ],
      icon: "🤸‍♀️",
    },
    {
      title: "Nutrition Guidance",
      description:
        "Pair your workouts with expert nutrition coaching to fuel results and build sustainable, healthy habits.",
      points: [
        "Meal Plans",
        "Calorie & Macro Tracking",
        "Supplement Guidance",
        "One-on-One Consults",
      ],
      icon: "🥗",
    },
  ];

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="relative min-h-screen bg-gray-50 dark:bg-gray-600 py-20 px-6 lg:px-24 overflow-hidden text-gray-800 dark:text-white"
    >
      {/* Floating gradient shapes */}
      <div
        className="absolute rounded-full filter blur-3xl opacity-30"
        style={{
          width: 160,
          height: 160,
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          top: 80,
          left: 40,
          animation: "float1 8s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <div
        className="absolute rounded-full filter blur-2xl opacity-20"
        style={{
          width: 240,
          height: 240,
          background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
          top: "50%",
          right: 80,
          transform: "translateY(-50%)",
          animation: "float2 10s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <div
        className="absolute rounded-full filter blur-xl opacity-25"
        style={{
          width: 200,
          height: 200,
          background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
          bottom: 80,
          left: "33%",
          animation: "float3 7s ease-in-out infinite",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <p className="text-green-600 dark:text-green-400 text-sm md:text-lg font-semibold mb-4">
          Train Smart. Live Strong.
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block group">
          Our Gym Services
          <span className="block h-1 bg-green-800 dark:bg-green-400 mx-auto rounded transition-all duration-500 w-16 group-hover:w-80"></span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 text-base sm:text-lg">
          Discover top-tier services designed to elevate your fitness experience. Whether you're training solo or sweating it out in a group, we’ve got the tools and team to help you crush your goals.
        </p>

        {/* Service Cards */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <motion.div
                key={index}
                className="relative group bg-white dark:bg-gray-800 rounded-md shadow-md dark:shadow-none p-6 text-left border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={direction}
              >
                <div
                  className={`absolute top-0 left-0 h-0.5 rounded-full transition-all duration-500 ease-in-out ${activeIndex === index
                      ? "w-full bg-gradient-to-r from-green-400 via-lime-500 to-green-600"
                      : "w-0 bg-transparent"
                    }`}
                />
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
    @keyframes float1 {
      0%, 100% { transform: translateY(0px) translateX(0); }
      50% { transform: translateY(-20px) translateX(15px); }
    }
    @keyframes float2 {
      0%, 100% { transform: translateY(0px) translateX(0); }
      50% { transform: translateY(25px) translateX(-20px); }
    }
    @keyframes float3 {
      0%, 100% { transform: translateY(0px) translateX(0); }
      50% { transform: translateY(-15px) translateX(-25px); }
    }
  `}</style>
    </section>

  );
};

export default ServicesSection;
