import React from "react";

const skills = [
  { name: "C/C++", level: 99, gradient: "from-blue-800 to-blue-500" },
  { name: "HTML5", level: 99, gradient: "from-orange-400 to-red-500" },
  { name: "Tailwind CSS", level: 90, gradient: "from-teal-400 to-cyan-500" },
  { name: "JavaScript", level: 98, gradient: "from-yellow-400 to-yellow-600" },
  { name: "React.js", level: 96, gradient: "from-sky-400 to-blue-600" },
  { name: "Redux Toolkit", level: 99, gradient: "from-purple-500 to-indigo-600" },
  { name: "React Hooks", level: 90, gradient: "from-rose-400 to-pink-500" },
  { name: "React Hook Form", level: 99, gradient: "from-pink-500 to-fuchsia-600" },
  { name: "Axios", level: 90, gradient: "from-emerald-400 to-lime-500" },
  { name: "SQL", level: 95, gradient: "from-indigo-400 to-blue-700" },
  { name: "NoSQL", level: 90, gradient: "from-green-600 to-green-400" },
  { name: "Git & GitHub", level: 100, gradient: "from-gray-700 to-gray-500" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-slate-900 to-black text-white px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wide drop-shadow-md">
          🚀 My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map(({ name, level, gradient }, idx) => (
            <div key={idx} className="relative group">
            
              <div
                className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white/5 border-2 border-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(255,255,255,0.08)] hover:shadow-[0_6px_16px_rgba(255,255,255,0.15)] transition-all duration-300 flex flex-col items-center justify-center`}
              >
                <div
                  className={`absolute -inset-[2px] rounded-full bg-gradient-to-br ${gradient} z-[-1]`}
                ></div>
                <div className="text-xl font-bold mt-1 text-gray-300 px-2 text-center">
                  {name}
                </div>
                <div className="text-sm font-medium text-white">{level}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
