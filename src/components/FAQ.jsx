import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need a membership to use the gym?",
    answer:
      "Yes, a membership is required to access our gym facilities. We offer flexible plans including monthly, yearly, and day passes.",
  },
  {
    question: "What are the gym operating hours?",
    answer:
      "Our gym is open from 5 AM to 11 PM on weekdays and 7 AM to 9 PM on weekends.",
  },
  {
    question: "Are personal training sessions available?",
    answer:
      "Yes, we have certified personal trainers available for one-on-one coaching and customized workout plans.",
  },
  {
    question: "Do you offer group fitness classes?",
    answer:
      "Absolutely! We offer a variety of classes including HIIT, yoga, spinning, and strength training, suitable for all fitness levels.",
  },
  {
    question: "Is there a trial period or guest pass available?",
    answer:
      "We offer a 3-day trial pass for new members and guest passes for current members to bring friends.",
  },
  {
    question: "What equipment do you have?",
    answer:
      "Our gym is equipped with cardio machines, free weights, resistance machines, functional training areas, and more.",
  },
  {
    question: "Are locker rooms and showers available?",
    answer:
      "Yes, we provide clean and secure locker rooms with showers and changing areas for all members.",
  },
  {
    question: "What COVID-19 safety measures are in place?",
    answer:
      "We follow all local health guidelines including regular sanitization, limited capacity, and mandatory mask policies where applicable.",
  },
];

export default function FAQSection() {
  const [value, setValue] = useState("");

  return (
    <section
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 md:px-20 transition-colors duration-500"
      id="faq"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-green-600 dark:text-green-400 font-semibold text-sm">Gym FAQs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Answers to common questions about our gym facilities and services.
        </p>
      </div>

      <Accordion.Root
        type="single"
        collapsible
        value={value}
        onValueChange={setValue}
        className="max-w-3xl mx-auto space-y-4"
      >
        {faqs.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="border rounded-xl bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-600 transition-shadow"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger
                className={cn(
                  "w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 dark:text-gray-100 text-base md:text-lg transition-colors duration-300 group hover:text-green-700 dark:hover:text-green-400"
                )}
              >
                <span className="transition-colors duration-300">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-green-400 transition-transform duration-300",
                    value === `item-${index}` && "rotate-180"
                  )}
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-5 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed animate-slideDown">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
