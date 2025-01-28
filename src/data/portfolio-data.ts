import { Project, Skill, Award, Education } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Research Paper Publication",
    description: "Published research paper on advanced machine learning algorithms",
    role: "Lead Researcher",
    image: "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738040306/My%20Word/zbu7hjgwvnna9xsfx2qi.avif",
    link: "https://ieeexplore.ieee.org/abstract/document/10534576"
  },
  {
    id: 2,
    title: "Mobile App Development (DocLink)",
    description: "The app includes a feature for disease classification, enabling patients to input symptoms and receive insights about possible conditions. This helps users understand their health better and seek medical advice when necessary.",
    role: " Developer",
    image: "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738040623/My%20Word/dealsnh6clbuwb0j6liz.jpg",
    link: "https://github.com/mhasan1122/DOC_LINK/tree/master/DocLink"
  },
  {
    id: 3,
    title: "UIU Counselling Hour",
    description: " Students can book counseling sessions with teachers to seek guidance and support on academic or personal matters",
    role: "Developer",
    image: "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738040910/My%20Word/eqavg2m1wzkplzdy16qv.jpg",
    link: "https://github.com/mhasan1122/UIU-COUNSELLING"
  },
  {
    id: 4,
    title: "Brain Tumor Prediction",
    description: "Developed a machine learning model to predict the likelihood of brain tumors based on MRI scans",
    role: "Developer in Machine learning",
    image: "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738041171/My%20Word/dp58fehu6bgvtify5mvf.jpg",
    link: "https://github.com/mhasan1122/Brain-Tumor-Prediction-Using-Swin-Transformer"
  },
  {
    id: 5,
    title: "Wild Fire Detection",
    description: "Developed a machine learning model to predict the likelihood of a wildfire based on satellite images",
    role: "Developer in Machine learning",
    image: "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738041388/My%20Word/em6jogdowsfksiysebjj.png",
    link: "https://github.com/mhasan1122/Wildfire-Detection-in-Satellite-Imagery"
  },
  {
    id: 6,
    title: "Mirza Vibes",
    description: "Real Time chat application",
    role: "Developer",
    image: "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738041603/My%20Word/dpzsau2wv1befuw0iejh.png",
    link: "https://github.com/mhasan1122/RealTimeChatting-MirzaVibes-"
  },
  {
    id: 7,
    title: "Geofencing-Using-Map",
    description: "Developed a geofencing system using Google Maps API to monitor and alert users when they enter or exit specific areas",
    role: "Developer",
    image: "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738041824/My%20Word/y60t4tfnjqt30hwdqqjc.jpg",
    link: "https://github.com/mhasan1122/Geofencing-Using-Map"
  },
  {
    id: 8,
    title: "UIU-SOCIAL-MEDIA",
    description: "Developed a social media platform for UIU students to connect, share, and engage with each other",
    role: "Developer",
    image: "https://res.cloudinary.com/dnk7d03vr/image/upload/v1738042173/My%20Word/zv56gzoz24d4ajr4etoj.jpg",
    link: "https://github.com/mhasan1122/UIU-SOCIAL-MEDIA"
  }
  // Add more projects
];
export const skills: Skill[] = [
  { name: "React", level: 92, category: "technical" },
  { name: "Node.js", level: 85, category: "technical" },
  { name: "TypeScript", level: 90, category: "technical" },
  { name: "MongoDB", level: 80, category: "technical" },
  { name: "Express.js", level: 85, category: "technical" },
  { name: "Python", level: 80, category: "technical" },
  { name: "Java", level: 80, category: "technical" },
  { name: "C++", level: 80, category: "technical" },
  { name: "C", level: 80, category: "technical" },
  { name: "Data Structures", level: 80, category: "technical" },
  { name: "Algorithms", level: 80, category: "technical" },
  { name: "Machine Learning", level: 80, category: "technical" },
  { name: "Deep Learning", level: 80, category: "technical" },
  { name: "Computer Vision", level: 80, category: "technical" },
  { name: "Problem Solving", level: 70, category: "soft" },
  { name: "Team Leadership", level: 85, category: "soft" },
  { name: "Communication", level: 90, category: "soft" },
  { name: "javascript", level: 90, category: "soft" },
  { name: "HTML", level: 90, category: "technical" },
  { name: "CSS", level: 85, category: "technical" },
  { name: "Tailwind CSS", level: 85, category: "technical" },
  { name: "Bootstrap", level: 85, category: "technical" },
];

export const awards: Award[] = [
  {
    title: "Champion Project Award",
    date: "2024",
    description: "First place in university-wide project competition For Mobile Application Development",
  },

  {
    title: "Champion Project Award",
    date: "2023",
    description:  "Awarded first place in the university-wide project competition at SAD Lab during the CSE Project Show, Fall 2023."
   },

   {
    title: "Champion Project Award",
    date: "2022",
    description:  "Awarded first place in the university-wide project competition at DBMS Lab during the CSE Project Show, Fall 2022."
   },



];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "United International University",
    year: "2023",
    description: "Graduated with honors, focusing on software engineering and machine learning"
  },
];