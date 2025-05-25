import React from "react";

const projects = [
  {
    title: "SoloPost Website",
    date: "January 2025",
    tech: [
      "React.js", "Redux", "HTML", "Tailwind CSS", "react-hook-form", "Appwrite"
    ],
    description: `Built a solo blogging platform with secure authentication, image uploads, blog creation, editing, and management features. Integrated Appwrite for auth, database, and storage. Used react-hook-form for form validation and Redux Toolkit for state management. Designed fully responsive UI with a focus on performance and seamless UX.`,
  },
  {
    title: "Incredible India Website",
    date: "October 2020",
    tech: [
      "HTML", "CSS", "JavaScript"
    ],
    description: `Developed a read-only website to explore India’s places and culture. Built using HTML, CSS, and JavaScript, deployed via GitHub Pages. Simple and clean UI for a static experience.`,
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-black to-slate-900 text-white px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wide drop-shadow-lg">
          💼 Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{project.date}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-white/10 text-gray-200 rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
