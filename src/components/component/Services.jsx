import React from "react";
import { Globe, Smartphone, Layers, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: <Globe className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "We build modern, responsive, and scalable websites tailored to your business needs.",
    items: [
      "Static Websites",
      "Dynamic Websites",
      "E-commerce",
      "WordPress",
      "Custom Sites",
    ],
  },
  {
    title: "Application Development",
    icon: <Smartphone className="w-10 h-10 text-green-600 dark:text-green-400" />,
    description:
      "From mobile apps to enterprise solutions, we craft applications for every platform.",
    items: ["Android Apps", "iOS Apps", "Cross-platform Apps", "Enterprise Apps"],
  },
  {
    title: "Additional Services",
    icon: <Layers className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
    description:
      "We provide a wide range of digital solutions to enhance your online presence.",
    items: ["UI/UX Design", "SEO", "Hosting Support", "Maintenance"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/evenbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>

      {/* Overlay to dim video and enhance text readability */}
      {/* Removed overlay background to prevent it from overriding the video */}
      <div className="absolute inset-0 z-0"></div>

      {/* Decorative Background Blobs */}
      {/* Removed background blobs to prevent image overlay on video */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-blue-700 z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-purple-700 z-0"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-900">
          We offer tailored digital solutions to help your business thrive in today’s fast-paced world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/30 dark:bg-gray-900/30 rounded-2xl shadow-md hover:shadow-lg transition-all p-8 flex flex-col hover:scale-[1.03] backdrop-blur-sm"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-900 mb-6">{service.description}</p>
            <ul className="space-y-3">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center text-gray-900 text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
