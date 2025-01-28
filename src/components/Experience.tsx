import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "ScaleUp Ads Agency",
      period: "2024",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on various projects."
    },
    {
      title: "Attentend IEEE explore 2024",
      company: "In MIST",
      period: "2024",
      description: "Attended IEEE explore 2024, a conference where I learned about the latest technologies and trends in the industry."
    }
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-4 bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}