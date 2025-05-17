const PlansSection = () => {
    const plans = [
        {
            name: "Basic",
            price: "₹999",
            period: "/month",
            features: [
                "Gym Access (Mon–Fri)",
                "1 Free PT Session",
                "Locker Room Access",
                "Standard Equipment",
            ],
            highlight: false,
        },
        {
            name: "Standard",
            price: "₹1499",
            period: "/month",
            features: [
                "24/7 Gym Access",
                "4 PT Sessions",
                "Group Classes Included",
                "Sauna & Locker Room",
            ],
            highlight: true,
        },
        {
            name: "Premium",
            price: "₹1999",
            period: "/month",
            features: [
                "All Standard Benefits",
                "Unlimited PT Sessions",
                "Custom Workout Plan",
                "Free Gym Merchandise",
            ],
            highlight: false,
        },
    ];

    return (
        <section
            id="plans"
            className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6 lg:px-24 transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Membership Plans
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
                    Choose the plan that fits your fitness journey. All memberships include access to our top-tier facilities and expert coaching staff.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-xl border shadow-sm p-8 text-left flex flex-col transition duration-300
                            bg-white dark:bg-gray-800 border-transparent hover:border-green-500 hover:bg-green-100 dark:hover:bg-green-900`}
                        >
                            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{plan.name}</h3>
                            <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                                {plan.price}
                                <span className="text-base font-medium text-gray-600 dark:text-gray-300">{plan.period}</span>
                            </div>
                            <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        ✅ <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`mt-8 px-6 py-3 rounded text-sm font-semibold transition duration-300 ${
                                    plan.highlight
                                        ? "bg-green-800 text-white hover:bg-green-700"
                                        : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-transparent hover:border-green-500 hover:bg-green-800 dark:hover:bg-green-700 hover:text-white"
                                }`}
                            >
                                {plan.highlight ? "Most Popular" : "Choose Plan"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlansSection;
