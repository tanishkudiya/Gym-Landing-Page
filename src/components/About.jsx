const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white min-h-screen py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold text-sm uppercase">Our Journey</p>
          <h2 className="text-3xl dark:text-green-800 sm:text-5xl font-extrabold text-gray-900 mb-4">
            About PulseFit Gym
          </h2>
          <p className="text-gray-600 dark:text-white max-w-2xl mx-auto">
            Founded in 2015, IronPulse Gym is more than just a place to work out — it’s a fitness community.
            We’re dedicated to helping you transform your body, boost your energy, and lead a stronger life.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
          <div className="relative w-full md:w-1/2 h-[400px] border-2 border-transparent hover:border-green-500 overflow-hidden rounded-2xl shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1721394747060-7cfc57104f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gym Facility"
              className="object-cover w-full h-full transform hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
              9+ Years Strong
            </div>
          </div>


          {/* Text */}
          <div className="w-full  md:w-1/2 space-y-6">
            <p className="text-gray dark:text-white-700 text-lg">
              At IronPulse, our mission is to empower you with tools, training, and support to achieve your fitness goals.
              Whether you’re new to fitness or a seasoned athlete, our certified trainers and high-performance facility will keep you motivated and progressing.
            </p>
            <blockquote className="p-4 bg-gray-100 rounded-lg border-l-4 border-t-4 border-green-500 text-gray-600">
              “We believe fitness is a lifestyle. That’s why we foster a positive, inclusive space where everyone is welcome
              — from lifters and runners to yogis and HIIT warriors. Your success is our strength.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
