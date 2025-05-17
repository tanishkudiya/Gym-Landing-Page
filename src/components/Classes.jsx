const classesData = [
    {
        id: 1,
        title: "Yoga Flow",
        description:
            "A calming and energizing class focused on flexibility, breathing, and mindfulness.",
        duration: "60 mins",
        difficulty: "Beginner",
        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "HIIT Workout",
        description:
            "High-Intensity Interval Training to boost your cardio and burn calories fast.",
        duration: "45 mins",
        difficulty: "Advanced",
        image: "https://plus.unsplash.com/premium_photo-1664910207555-fac63513e7ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Strength Training",
        description:
            "Build muscle and improve strength with weight lifting and resistance exercises.",
        duration: "60 mins",
        difficulty: "Intermediate",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        title: "Zumba Dance",
        description:
            "A fun, energetic dance workout combining Latin and international music.",
        duration: "50 mins",
        difficulty: "All Levels",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    },
];

export default function Classes() {
    return (
        <section id="classes" className="min-h-screen mx-auto px-6 py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
            <h2 className="text-4xl font-bold text-center text-green-900 dark:text-green-400 mb-12">
                Our Classes
            </h2>
            <div className="grid gap-10 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-4">
                {classesData.map(({ id, title, description, duration, difficulty, image }) => (
                    <div
                        key={id}
                        className="bg-white dark:bg-gray-800 border-2 border-transparent dark:border-gray-700 p-2 hover:border-green-500 rounded-lg shadow-lg dark:shadow-none overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-48 rounded-t-md object-cover"
                            loading="lazy"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">{title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
                            <div className="flex justify-between text-green-700 dark:text-green-300 font-semibold text-sm">
                                <span>Duration: {duration}</span>
                                <span>Level: {difficulty}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

