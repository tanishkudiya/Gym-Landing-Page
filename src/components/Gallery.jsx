const galleryImages = [
  "https://images.unsplash.com/photo-1716307043003-dbe6a5cc496e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602827114685-efbb2717da9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664301437780-ee46787734d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1659331150328-e6c822ae77b2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1529420681125-2878126af4a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1651315283944-852219dff97b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1651340049490-816c37d1547b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1734668487893-d686f3c8d0cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white dark:bg-gray-800 py-20 px-6 md:px-12 transition-colors duration-500"
    >
      <div className="text-center mb-16">
        <p className="text-green-600 dark:text-green-400 font-semibold text-sm md:text-base">
          Gallery
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Our Gym in Action
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          See what makes our gym the ultimate destination for fitness enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((src, index) => (
          <div key={index} className="flip-card w-full h-64">
            <div className="flip-inner rounded-xl shadow-lg transition-transform duration-600 cursor-pointer transform-style-preserve-3d hover:rotate-y-180">
              <div className="flip-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-back absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center font-semibold text-lg p-4
                bg-green-600 text-white dark:bg-green-500 dark:text-green-100
                transform rotate-y-180"
              >
                Gym Vibes, Energy & Power 💪
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
