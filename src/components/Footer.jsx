import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-gray-700 dark:text-gray-300">
        {/* Gym Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-400">
            PulseFit
          </h2>
          <p className="mb-4">
            Empowering your fitness journey with expert coaching and top-notch equipment.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 dark:text-gray-200">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Classes", "Trainers", "Contact", "Gallery", "MemberShip"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s/g, "")}`} className="hover:text-green-600 dark:hover:text-green-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 dark:text-gray-200">Contact Us</h3>
          <p className="flex items-start mb-2">
            <FaMapMarkerAlt className="mr-2 mt-1 text-green-600 dark:text-green-400" />
            123 Fitness Ave, Muscle City, TX 75001, United States
          </p>
          <p className="flex items-center">
            <FaPhoneAlt className="mr-2 text-green-600 dark:text-green-400" />
            +1 (555) 123-4567
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4 dark:text-gray-200">Newsletter</h3>
          <p className="mb-4">
            Subscribe for fitness tips, updates, and exclusive offers.
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
          <button className="w-full bg-green-900 hover:bg-green-800 text-white py-2 rounded transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-4 text-sm text-gray-600 dark:text-gray-400">
        © 2025 PulseFit Gym. All rights reserved.
      </div>
    </footer>
  );
}
