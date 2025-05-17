import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const trainersData = [
  {
    id: 1,
    name: "Alex Morgan",
    specialization: "Strength & Conditioning",
    image:
      "https://media.istockphoto.com/id/1152601146/photo/confident-young-macho-man-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=Qq36_fJ4gpbvCh9WC54idXlujgkOHRRzrQlSPwqFkx8=",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Samantha Lee",
    specialization: "Yoga & Flexibility",
    image:
      "https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?s=2048x2048&w=is&k=20&c=GsDZdjulabXxlobUssd2d-EnN0eJNyE5WdOCpk_9qMs=",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "David Kim",
    specialization: "HIIT & Cardio",
    image:
      "https://media.istockphoto.com/id/852401732/photo/happy-personal-trainer-working-at-the-gym.jpg?s=2048x2048&w=is&k=20&c=0qyA-J-gKxFObiKRP1wziCZS_hYCk223yyPI9VvI4nk=",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="bg-gray-50 dark:bg-gray-700 py-20 px-6 md:px-12 transition-colors duration-500"
    >
      <div className="text-center mb-16">
        <p className="text-green-600 dark:text-green-400 font-semibold text-sm md:text-base">
          Meet Our Experts
        </p>
        <h2 className="text-3xl text-green-900 dark:text-green-300 md:text-4xl font-bold mt-2 mb-4">
          Professional Trainers
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto">
          Our certified trainers are here to guide you every step of the way with personalized training and support.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {trainersData.map(({ id, name, specialization, image, socials }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 rounded-xl p-2 overflow-hidden shadow-lg border-2 border-transparent hover:border-green-500 transition duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-full rounded-t-lg h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                {name}
              </h3>
              <p className="text-green-600 dark:text-green-400 text-sm mb-4">
                {specialization}
              </p>
              <div className="flex justify-center space-x-4 text-green-700 dark:text-green-300 text-lg">
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 dark:hover:text-green-400">
                  <FaFacebookF />
                </a>
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 dark:hover:text-green-400">
                  <FaInstagram />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 dark:hover:text-green-400">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
