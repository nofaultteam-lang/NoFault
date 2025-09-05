import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

// Example project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/assets/ecommerceimg.jpg",
    description: "A scalable e-commerce platform with secure payments.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    category: "Web",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile Application",
    image: "/assets/mobileimg.jpg",
    description: "Cross-platform mobile banking app with real-time sync.",
    technologies: ["Flutter", "Firebase", "REST API"],
    category: "Mobile",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/assets/portfolioimg.png",
    description: "Personal portfolio site with blog and animations.",
    technologies: ["Next.js", "Tailwind", "Vercel"],
    category: "Web",
    link: "https://my-portfolio-8lao.vercel.app/",
  },
  {
    id: 4,
    title: "UI/UX Dashboard",
    image: "/assets/uiuximg.png",
    description: "Analytics dashboard with custom charts and dark mode.",
    technologies: ["React", "Recharts", "Sass"],
    category: "UI/UX",
    link: "https://visiworld.in/",
  },
  {
    id: 5,
    title: "College Projects",
    image: "/assets/collegeprojectimg.png",
    description: "Collection of projects completed during college studies.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    category: "College",
    link: "https://whimsical-raindrop-77a601.netlify.app/signin",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/oddbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax effect
      }}
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Our Projects
        </h2>
        <p className="text-lg text-gray-300">
          Showcasing our recent works across web, mobile, UI/UX, and college projects.
        </p>
      </div>



      {/* Infinite Horizontal Slider Container */}
      <div className="max-w-7xl mx-auto px-6 overflow-hidden relative z-10">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: projects.length * 3, // 3 seconds per card
              ease: "linear",
            },
          }}
        >
          {/* First set of cards */}
          {projects.map((project, index) => (
            <motion.div
              key={`first-${project.id}`}
              className="flex-shrink-0 w-80 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden hover:scale-[1.02] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-2xl transform hover:scale-110 transition duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <a
                  href={project.link}
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-200 transition"
                >
                  View More →
                </a>
              </div>
            </motion.div>
          ))}

          {/* Duplicate set for seamless loop */}
          {projects.map((project, index) => (
            <motion.div
              key={`second-${project.id}`}
              className="flex-shrink-0 w-80 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden hover:scale-[1.02] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: (index + projects.length) * 0.1 }}
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-2xl transform hover:scale-110 transition duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <a
                  href={project.link}
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-200 transition"
                >
                  View More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
