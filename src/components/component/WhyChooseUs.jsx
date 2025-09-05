import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  Clock,
  Zap,
  Headphones,
  Globe,
  Shield,
  TrendingUp,
  Smile,
} from "lucide-react";

const features = [
  {
    title: "Affordable Pricing",
    description: "We offer competitive pricing without compromising quality.",
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "On-time Delivery",
    description: "Our team ensures timely delivery for all projects.",
    icon: <Clock className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Modern Tech Stack",
    description: "We use the latest technologies to build scalable solutions.",
    icon: <Zap className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Dedicated Support",
    description: "Our support team is available to assist you anytime.",
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Global Reach",
    description: "Our solutions help you reach audiences worldwide.",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Secure Solutions",
    description: "We prioritize security in all our applications.",
    icon: <Shield className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Growth Oriented",
    description: "We deliver solutions that help your business grow.",
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Happy Clients",
    description: "Our clients are satisfied with our high-quality work.",
    icon: <Smile className="w-8 h-8 text-blue-600" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section
    id="whychoose"
      className="why-choose-us-wrapper relative px-6 pt-16 pb-20 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/oddbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // <-- Parallax effect here
        marginTop: 0,
        paddingTop: "4rem",
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white leading-tight">Why Choose Us</h2>
        <p className="mt-4 text-white text-lg max-w-2xl mx-auto">
          Discover why clients trust us to deliver high-quality digital solutions that
          drive results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition transform backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
