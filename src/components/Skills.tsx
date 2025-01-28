import { m, motion } from "framer-motion";
import { skills } from "../data/portfolio-data";
import { SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiHtml5, SiMongodb } from "react-icons/si"; // Icons for technical skills
import { FaLightbulb, FaUsers } from "react-icons/fa"; // Icons for soft skills

// Mapping skills to their corresponding icons
const skillIcons: Record<string, JSX.Element> = {
  React: <SiReact size={40} className="text-blue-500" />,
  "Node.js": <SiNodedotjs size={40} className="text-green-500" />,
  TypeScript: <SiTypescript size={40} className="text-blue-700" />,
  mongoDB: <SiMongodb size={40} className="text-green-500" />,
  "Express.js": <SiNodedotjs size={40} className="text-green-500" />,
  "python": <SiNodedotjs size={40} className="text-green-500" />,
  "Problem Solving": <FaLightbulb size={40} className="text-yellow-500" />,
  "Team Leadership": <FaUsers size={40} className="text-purple-500" />,
  "Communication": <FaUsers size={40} className="text-blue-500" />,
  "javascript": <SiJavascript size={40} className="text-yellow-500" />, "typescript": <SiTypescript size={40} className="text-yellow-500" />,
  "HTML": <SiHtml5 size={40} className="text-orange-500" />,
  "CSS": <SiHtml5 size={40} className="text-blue-500" />,
  "Tailwind CSS": <SiHtml5 size={40} className="text-blue-500" />,
  "Bootstrap": <SiHtml5 size={40} className="text-blue-500" />,

};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4"
            >
              {/* Skill Icon */}
              <div>{skillIcons[skill.name]}</div>

              {/* Skill Details */}
              <div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-gray-500">Category: {skill.category}</p>
                <div className="mt-2">
                  {/* Skill Level Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
