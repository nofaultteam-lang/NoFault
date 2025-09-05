import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "NoFault delivered our project on time with excellent quality!",
  },
  {
    name: "Priya Verma",
    text: "Their team is highly professional and responsive. Highly recommended!",
  },
  {
    name: "Arjun Mehta",
    text: "Great experience working with them. Affordable pricing and amazing support.",
  },
  {
    name: "Sneha Patel",
    text: "Outstanding service and attention to detail. Will definitely work with them again!",
  },
  {
    name: "Vikram Singh",
    text: "The best development team I've worked with. They exceeded all our expectations.",
  },
  {
    name: "Anjali Gupta",
    text: "Professional, reliable, and creative. Our website looks amazing thanks to them!",
  },
  {
    name: "Rohit Kumar",
    text: "Fast delivery, great communication, and top-notch quality. Highly satisfied!",
  },
  {
    name: "Kavita Jain",
    text: "They understood our vision perfectly and brought it to life beautifully.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16" style={{
      backgroundImage: "url('/assets/evenbg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-gray-600">
          Hear from some of our happy clients
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="max-w-6xl mx-auto px-6 overflow-hidden relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, "-100%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: testimonials.length * 5,
              ease: "linear",
            },
          }}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
            >
              {/* Quotation Icon */}
              <Quote className="mb-4 text-gray-300 w-6 h-6" />

              {/* Client Name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {testimonial.name}
              </h3>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
