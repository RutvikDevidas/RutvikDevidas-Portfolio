import {
  SiBootstrap,
  SiCanvas,
  SiCss,
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiWordpress,
} from 'react-icons/si';
import { Code2, Database, FileText, GraduationCap, Palette, SearchCheck } from 'lucide-react';

export const socials = {
  github: 'https://github.com/RutvikDevidas',
  linkedin: 'https://www.linkedin.com/in/rutvikdevidas',
  instagram: 'https://www.instagram.com/its._.rutvik',
};

export const techStack = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'React', icon: SiReact },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: Code2 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Figma', icon: SiFigma },
  { name: 'Canva', icon: SiCanvas },
  { name: 'WordPress', icon: SiWordpress },
  { name: 'SEO', icon: SearchCheck },
  { name: 'Microsoft Office', icon: FileText },
];

export const stats = [
  { label: 'Projects Completed', value: '05+', icon: Code2 },
  { label: 'Education', value: 'BCA', icon: GraduationCap },
  { label: 'Skills', value: '16+', icon: Palette },
];

export const qualifications = [
  {
    title: 'SSC',
    board: 'Goa Board of Secondary and Higher Secondary Education',
    school: 'Tudal High School, Tudal',
    details: ['72.17%', 'First Class'],
  },
  {
    title: 'HSSC',
    board: 'Goa Board of Secondary and Higher Secondary Education',
    school: 'S.S Angle Higher Secondary School, Mashem',
    details: ['64.17%', 'First Class'],
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    board: 'Goa University',
    school: 'Rosary College of Commerce and Arts',
    details: ['Navelim, Goa', 'FGPA : 7.50 (B+)'],
  },
];

export const skillGroups = [
  { title: 'Frontend', skills: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'React.js'] },
  { title: 'Programming', skills: ['Java', 'Python', 'JavaScript', 'Dart'] },
  { title: 'Database', skills: ['Firestore', 'MySQL'] },
  { title: 'Design', skills: ['Figma', 'Canva'] },
  { title: 'Others', skills: ['Microsoft Office', 'SEO', 'WordPress'] },
];

export const projects = [
  {
    name: 'Smart Parking System for College Students',
    github: 'https://github.com/RutvikDevidas/Smart-Parking-System-For-College',
    description:
      'A smart parking management system designed for college campuses to efficiently allocate and monitor parking spaces for students.',
    image: '/project-parking.svg',
  },
  {
    name: 'Doctor Appointment Booking App',
    github: 'https://github.com/RutvikDevidas/GoDoc',
    description:
      'A Flutter application that allows patients to book appointments with doctors seamlessly using Firebase.',
    image: '/project-doctor.svg',
  },
  {
    name: 'Stone Paper Scissors',
    github: 'https://github.com/RutvikDevidas/Stone-Paper-Scissor',
    description: 'Interactive JavaScript game with score tracking.',
    image: '/project-game.svg',
  },
  {
    name: 'Calculator',
    github: 'https://github.com/RutvikDevidas/Calculator',
    description: 'Responsive calculator built using HTML, CSS and JavaScript.',
    image: '/project-calculator.svg',
  },
  {
    name: 'Unikey E-Commerce Website',
    github: 'https://github.com/RutvikDevidas/Unikey---eCommerce-Keychain-Website',
    description:
      'A responsive keychain e-commerce website featuring product listings and modern UI.',
    image: '/project-ecommerce.svg',
  },
];
