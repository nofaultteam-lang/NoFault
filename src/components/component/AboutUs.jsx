import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Target, Rocket } from "lucide-react";

// Import URL of the JSON animation with ?url so Vite treats it as a static asset URL
import aboutAnimationUrl from "/assets/about.json?url";

const AboutUs = () => {

  // Text color based on bg type
  const headingClass = "text-gray-900";
  const textClass = "text-gray-900";

  // State to store animation JSON data after fetch
  const [animationData, setAnimationData] = useState(null);

  // Fetch animation JSON on mount
  useEffect(() => {
    fetch(aboutAnimationUrl)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation JSON", err));
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen py-20 px-6 overflow-hidden" style={{
      paddingBottom: 0,
      backgroundImage: "url('/assets/evenbg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative min-h-screen">
        {/* Left Side - Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto"
        >
          {/* Render Lottie only after animation data is loaded */}
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="w-full"
            />
          )}
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold ${headingClass}`}>About Us</h2>
          <p className={`text-lg leading-relaxed ${textClass}`}>
            We are a team of passionate developers committed to delivering
            high-quality solutions.
          </p>

          {/* Vision & Mission */}
          <div className="flex flex-col md:flex-row gap-4">
            <motion.div
              className="flex items-center gap-4 bg-white/90 p-5 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 backdrop-blur-sm"
              whileHover={{ scale: 1.03 }}
            >
              <Target className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To create innovative and impactful web and mobile solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 bg-white/90 p-5 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 backdrop-blur-sm"
              whileHover={{ scale: 1.03 }}
            >
              <Rocket className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To empower businesses with reliable and scalable digital
                  solutions.
                </p>
              </div>
            </motion.div>
          </div>

          <p className={`leading-relaxed ${textClass}`}>
            We combine creativity and technology to deliver solutions that help
            our clients succeed in a digital-first world.
          </p>

          <motion.a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:scale-105 hover:shadow-xl transition transform"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
