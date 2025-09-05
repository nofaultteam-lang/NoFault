import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2jpfiyx",   // ✅ Your Service ID
        "template_omu2wqs", // ✅ Your Template ID
        form.current,
        "_tSB0c1AUApyJSwOf" // ✅ Your Public Key
      )
      .then(
        () => {
          setIsSubmitted(true);
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  const contactDetails = [
    {
      label: "Email",
      value: ["info@nofault.in", "nofaultteam@gmail.com"], // ✅ multiple emails
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      link: "mailto:info@nofault.in",
    },
    {
      label: "Phone",
      value: "+91 8077719863",
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      link: "tel:+918077719863",
    },
    {
      label: "WhatsApp",
      value: "+91 8077719863",
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      link: "https://wa.me/918077719863",
    },
  ];

  return (
    <section
    id="contact"
      className="relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/oddbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Heading + Description (Dark Text) */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Contact Us</h2>
        <p className="mt-4 text-white text-lg max-w-2xl mx-auto">
          Reach out to us with any questions, project ideas, or partnership opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Contact Form or Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-xl p-8 backdrop-blur-sm min-h-[320px] flex items-center justify-center"
        >
          {!isSubmitted ? (
            <form ref={form} onSubmit={sendEmail} className="space-y-4 w-full">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-900 dark:text-gray-100 font-semibold mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-900 dark:text-gray-100 font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-900 dark:text-gray-100 font-semibold mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Your message..."
                  required
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100 shadow-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-6xl">🎉</div>
              <h3 className="text-2xl font-semibold text-green-600">
                Your message was sent successfully!
              </h3>
            </div>
          )}
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform backdrop-blur-sm"
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {item.label}
                </h4>
                {Array.isArray(item.value) ? (
                  <div className="flex flex-col">
                    {item.value.map((val, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300">
                        {val}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
                )}
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
