import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-12 transition-colors duration-500"
    >
      <div className="text-center mb-16">
        <p className="text-green-600 dark:text-green-400 font-semibold text-sm md:text-base">
          Book Your Session
        </p>
        <h2 className="text-3xl text-green-900 dark:text-green-300 md:text-4xl font-bold mt-2 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto">
          Ready to reach your fitness goals? Schedule your personal training session,
          ask about memberships, or just say hello — we’re here to help!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8 border-2 border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:border-green-700 dark:hover:border-white bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-black/40">
          <div className="flex items-start space-x-4">
            <div className="bg-green-600 dark:bg-green-500 p-4 rounded-xl text-white text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                123 Fitness Ave, Suite 200, Denton, TX 76205, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-600 dark:bg-green-500 p-4 rounded-xl text-white text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">+1 (940) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-600 dark:bg-green-500 p-4 rounded-xl text-white text-xl">
              <FaClock />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Business Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mon–Fri: 5:00 AM – 10:00 PM
                <br />
                Sat: 6:00 AM – 8:00 PM
                <br />
                Sun: 7:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:border-green-700 dark:hover:border-white p-8 rounded-xl shadow-lg dark:shadow-black/40 space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Service
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Personal Training</option>
              <option>Group Classes</option>
              <option>Nutrition Coaching</option>
              <option>Gym Membership</option>
              <option>Massage Therapy</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="preferredDate"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Preferred Date
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your fitness goals or ask any questions"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
