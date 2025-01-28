import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 mb-6">
            Hello, I'm Mirza Hasan. As a recent graduate from United International University(UIU) with a degree in Computer Science and Engineering,
            I bring fresh perspectives and modern technical skills to the world of software development.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            My passion lies in creating efficient, scalable solutions that make a real impact. With a strong foundation
            in both frontend and backend technologies, I strive to build applications that not only work flawlessly
            but also provide exceptional user experiences.
          </p>
          <p className="text-lg text-gray-600">
            I'm constantly learning and adapting to new technologies, with a particular interest in cloud computing,
            artificial intelligence, and modern web frameworks. My goal is to contribute to innovative projects
            that push the boundaries of what's possible in technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}