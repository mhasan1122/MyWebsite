import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738038159/my%20pic/os9kuwfvbocbeu66yd3t.jpg",
    "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738038159/my%20pic/tnquytuez5zkf5zdkrnt.jpg",
    "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738038159/my%20pic/nd5tneozuoziu4uuqrrv.jpg",
    "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738038158/my%20pic/uuqxrslua9jqenjioxqz.jpg",
    "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738038158/my%20pic/oge7goemdglk1tek3g2q.jpg",
    "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738038160/my%20pic/xymxq9gkm9apuoipzqou.jpg",
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Mirza Hasan Limon</h1>
            <h2 className="text-3xl text-gray-300 mb-6">Full Stack Developer</h2>
            <div className="flex space-x-4 mb-8">
              <a href="https://github.com/mhasan1122" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mirza-hasan-08a2b41a3/" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:mirzahasanlimon619@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+8801623398837" className="hover:text-blue-400 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </motion.div>
          
          <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-2xl">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="absolute w-full h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: currentImage === index ? 1 : 0,
                  scale: currentImage === index ? 1 : 0.8,
                  zIndex: currentImage === index ? 1 : 0
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 }
                }}
              >
                <img
                  src={img}
                  alt={`Mirza Hasan Limon ${index + 1}`}
                   className="w-[600px] h-[600px] object-cover"
                />
              </motion.div>
            ))}
            
            {/* Image Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage === index ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}