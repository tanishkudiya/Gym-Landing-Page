const HeroSection = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Text Content */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="text-green-600 text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wide">
            Unlock Your Potential
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold dark:text-white text-gray-900 leading-tight">
            Train Hard,{" "}
            <span className="block text-green-800 underline decoration-yellow-400">
              Stay Strong
            </span>
          </h1>

          <p className="text-gray-700 dark:text-white text-justify text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            Welcome to your next fitness chapter. Whether you're training for strength, endurance, or transformation—our expert coaches, cutting-edge equipment, and community vibe will push you to crush your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto justify-center md:justify-start">
            <a href="#plans">
              <button className="border dark:text-white border-gray-400 text-sm sm:text-base text-black px-6 py-2 rounded hover:bg-gray-100 transition">
                💳 Explore Plans
              </button>
            </a>
            <a href="#contact">
              <button className="bg-green-800 text-white text-sm sm:text-base px-6 py-2 rounded hover:bg-green-700 transition">
                🚀 Join Now
              </button>
            </a>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1920"
            alt="Gym Training"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl h-auto rounded-xl shadow-xl object-cover border"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
