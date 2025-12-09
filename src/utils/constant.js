import { 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaSchool, 
  FaFootballBall,
  FaBook,
  FaFlask,
  FaLaptop,
  FaMusic,
  FaPalette,
  FaRunning,
  FaUserGraduate,
  FaUsers,
  FaHistory,
  FaBullseye,
  FaEye,
  FaMicroscope,
  FaTheaterMasks,
  FaProjectDiagram,
  FaCalculator,
  FaGlobeAmericas,
  FaAtom,
  FaCode,
  FaLandmark,
  FaChartLine,
  FaBriefcase,
  FaDollarSign
} from 'react-icons/fa';
import PreSchool from '../assets/images/Pre-School.jpg'

import { 
  SiGoogleclassroom 
} from 'react-icons/si';



export const founders = [
  {
    name: "Sir ABC XYZ",
    role: "Founder & Chairman",
    img: "/founder1.jpg",
    desc: "With a lifelong passion for education, Sir ABC XYZ laid the foundation of our school with the vision of providing high-quality education and nurturing confident young leaders.",
    iconName: "FaGraduationCap",
    color: "text-blue-500"
  },
  {
    name: "Madam DEF LMN",
    role: "Co-Founder & Academic Head",
    img: "/founder2.jpg",
    desc: "Her dedication to academic excellence and character building has played a major role in shaping the environment of our school.",
    iconName: "FaLightbulb",
    color: "text-purple-500"
  },
  {
    name: "Sir GHI PQR",
    role: "Director of Operations",
    img: "/founder3.jpg",
    desc: "With a strong background in educational development, he ensures modern learning practices and a disciplined environment.",
    iconName: "FaUserTie",
    color: "text-green-500"
  },
  {
    name: "Madam STU VWX",
    role: "Co-Director & Student Affairs",
    img: "/founder4.jpg",
    desc: "Her focus on co-curricular growth, leadership, and student well-being has helped the school grow into a vibrant learning community.",
    iconName: "FaHeart",
    color: "text-pink-500"
  }
];

// Icon names only - no JSX
export const navLinks = [
  {
    name: "Home",
    path: "/",
    type: "link",
    icon: FaSchool
  },
  {
    name: "About",
    path: "/about",
    type: "dropdown",
    icon: FaUsers,
    subLinks: [
      { name: "About Us", path: "/about", icon: FaSchool },
      { name: "Rule and Regulations", path: "/about/rules", icon: FaBook },
      { name: "PTM", path: "/about/ptm", icon: FaChalkboardTeacher },
      { name: "Activities", path: "/about/activities", icon: FaFootballBall },
      { name: "Curriculum Approach", path: "/about/curriculum", icon: FaGraduationCap },
      { name: "Guiding Faculty", path: "/about/faculty", icon: FaUserGraduate },
      { name: "Age Criteria", path: "/about/age-criteria", icon: SiGoogleclassroom },
      { name: "Our School Ethos", path: "/about/ethos", icon: FaBullseye }
    ]
  },
  {
    name: "Academics",
    path: "/academics",
    type: "dropdown",
    icon: FaGraduationCap,
    subLinks: [
      { name: "Academics", path: "/academics", icon: FaBook },
      { name: "Education Policy", path: "/academics/policy", icon: FaBook },
      { name: "Learning Strategies", path: "/academics/strategies", icon: FaChalkboardTeacher },
      { name: "Home Work", path: "/homework", icon: FaChalkboardTeacher,}
    ]
  },
  {
    name: "Campus",
    path: "/campus",
    type: "link",
    icon: FaSchool
  },
  {
    name: "Our Founder",
    path: "/our-founder",
    type: "link",
    icon: FaChalkboardTeacher
  },
  {
    name: "Contact Us",
    path: "/contact",
    type: "link",
    icon: FaFootballBall
  }
];

export const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/", icon: FaSchool },
    { name: "About Us", path: "/about", icon: FaUsers },
    { name: "Academics", path: "/academics", icon: FaGraduationCap },
    { name: "Campus", path: "/campus", icon: FaSchool },
    { name: "Contact Us", path: "/contact", icon: FaChalkboardTeacher },
    { name: "Events", path: "/events", icon: FaFootballBall }
  ],
  aboutLinks: [
    { name: "Facilities", path: "/about/facilities", icon: FaSchool },
    { name: "Rules & Regulations", path: "/about/rules", icon: FaBook },
    { name: "Teaching Faculty", path: "/about/faculty", icon: FaUserGraduate },
    { name: "Management Team", path: "/about/management", icon: FaUsers }
  ],
  academicLinks: [
    { name: "Education Policy", path: "/academics/policy", icon: FaBook },
    { name: "Learning Strategies", path: "/academics/strategies", icon: FaChalkboardTeacher },
    { name: "Activity Based Learning", path: "/academics/activity-learning", icon: FaFlask },
    { name: "Subjects Offered", path: "/academics/subjects", icon: FaLaptop }
  ],
  contactInfo: {
    address: "123 School Street, Education Zone, City",
    phone: "+92 300 1234567",
    email: "info@muslimkhatrischool.edu.pk",
    timing: "Mon - Fri: 8:00 AM - 3:00 PM"
  },
  socialLinks: [
    { name: "Facebook", url: "/", icon: "facebook" },
    { name: "Twitter", url: "/", icon: "twitter" },
    { name: "Instagram", url: "/", icon: "instagram" },
    { name: "YouTube", url: "/", icon: "youtube" }
  ]
};

export const schoolInfo = {
  name: "MKTMPS",
  tagline: "Excellence in Education",
  description: "Committed to excellence in education and character building since establishment.",
  established: "2005",
  mission: "To provide quality education that nurtures young minds with strong moral values and academic excellence.",
  vision: "To be a leading institution in shaping future leaders with holistic development."
};

// utils/constant.js
export const academicsData = [
  {
    title: "Pre-School System",
    img: PreSchool,
    desc: "Our Pre-School System gives young children a joyful and warm start. Through playful exploration, guided activities, and loving care in an Islamic environment, children build early reading, writing, motor, communication and social skills. Teachers nurture curiosity, confidence, and foundational learning readiness to prepare them for formal schooling."
  },
  {
    title: "Elementary School System",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1350&q=80",  // Elementary students in classroom with teacher
    desc: "At Elementary level, students grow academically and holistically. With a balanced curriculum combining religious, language, scientific, creative and physical education, we build a strong academic foundation. Lessons are interactive and activity-based, helping children learn religion, languages, mathematics, science, computer studies, social studies, arts and physical education in a supportive environment.",
    subjects: [
      "Quran",
      "Islamiat",
      "English, Urdu & Arabic",
      "Mathematics",
      "Science",
      "Computer Studies",
      "Social Studies",
      "Arts",
      "Physical Education",
    ]
  },
  {
    title: "Junior School System",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1350&q=80",  // Junior high students in classroom discussion
    desc: "In Junior School, we focus on deeper academic learning, character building, and moral growth. Students engage in thoughtful discussions, project-based tasks, and collaborative learning, under the guidance of teachers rooted in Islamic values. This phase helps them develop intellectually, socially, emotionally, and spiritually — preparing them for higher studies with confidence and strong ethics.",
    subjects: [
      "Quran",
      "Islamic Studies",
      "Arabic",
      "Urdu",
      "English",
      "Mathematics",
      "Social Studies",
      "Arts",
    ]
  }
];

// Remove JSX from features and use icon names
export const features = [
  {
    title: "Quality Education",
    description: "Comprehensive curriculum designed for holistic development",
    icon: "FaGraduationCap"
  },
  {
    title: "Experienced Faculty",
    description: "Highly qualified and dedicated teaching staff",
    icon: "FaChalkboardTeacher"
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art infrastructure and learning resources",
    icon: "FaSchool"
  },
  {
    title: "Sports & Activities",
    description: "Diverse co-curricular and sports programs",
    icon: "FaFootballBall"
  }
];

 export const stats = [
    {
      id: 1,
      number: 1,
      label: 'CAMPUSES',
      suffix: '',
      description: ''
    },
    {
      id: 2,
      number: 20,
      label: 'STAFF',
      suffix: '+',
      description: ''
    },
    {
      id: 3,
      number: 36,
      label: 'YEARS',
      suffix: '',
      description: ''
    },
    {
      id: 4,
      number: 500,
      label: 'STUDENTS',
      suffix: '+',
      description: ''
    }
  ];

  export const accordionData = [
    {
      title: "Teaching Philosophy",
      content: `Our teachers are qualified, dedicated, and professional individuals who focus on the holistic 
      development of students. They emphasize not only academic excellence but also character building, Islamic 
      values, confidence, and ethical behavior. Through well-planned lessons and modern teaching methods, they 
      prepare students to meet real-life challenges.`
    },
    {
      title: "Professional Development",
      content: `We conduct regular training programs, workshops, refresher courses, and Quran & Hadith classes to 
      enhance teacher expertise. These programs ensure teachers continue to grow spiritually, academically, and 
      professionally.`
    },
    {
      title: "Islamic Integration",
      content: `Islamic values are embedded into all subjects. Regular Dars-e-Quran, Hadith sessions, and special 
      events like Seerat-un-Nabi and Ramadan programs strengthen the teachers’ Islamic foundation and contribute 
      to student character development.`
    },
    {
      title: "Coordinated Academic System",
      content: `Our coordinators ensure smooth curriculum planning, lesson pacing, teaching strategies, classroom 
      guidance, student support, and Islamic integration. Weekly meetings help teachers continuously improve their 
      professional competence.`
    },
    {
      title: "Integrated Islamic Curriculum",
      content: `Morning assemblies, debates, sports, Fehm-ul-Quran, Islamic history, and Fiqh help create a morally 
      strong and academically balanced student body. Carefully selected topics strengthen Islamic identity and 
      character.`
    }
  ];

export const strategies = [
  {
    icon: "FaLightbulb",
    title: "Active Learning",
    desc: "Students engage in discussions, group activities, and hands-on projects to develop critical thinking and problem-solving skills."
  },
  {
    icon: "FaUsers",
    title: "Differentiated Instruction",
    desc: "Lessons are tailored to accommodate various learning styles including visual, auditory, and kinesthetic approaches."
  },
  {
    icon: "FaLaptopCode",
    title: "Technology Integration",
    desc: "Modern digital tools and interactive technologies make learning dynamic and engaging."
  },
  {
    icon: "FaClipboardCheck",
    title: "Continuous Assessment",
    desc: "Regular quizzes, formative assessments, and exercises help monitor progress and provide timely support."
  },
  {
    icon: "FaHandsHelping",
    title: "Collaborative Learning",
    desc: "Peer learning and team activities develop communication, empathy, and leadership skills."
  },
  {
    icon: "FaSearch",
    title: "Reflective Practices",
    desc: "Students are encouraged to reflect on their learning, set personal goals, and track their growth."
  },
];


export const subjects = {
  primary: [
    { name: "English", icon: "FaBook" },
    { name: "Mathematics", icon: "FaCalculator" },
    { name: "Science", icon: "FaFlask" },
    { name: "Social Studies", icon: "FaGlobeAmericas" },
    { name: "Urdu", icon: "FaBook" },
    { name: "Islamiyat", icon: "FaLandmark" },
    { name: "Art & Craft", icon: "FaPalette" },
    { name: "Physical Education", icon: "FaRunning" }
  ],
  middle: [
    { name: "English Language & Literature", icon: "FaBook" },
    { name: "Mathematics", icon: "FaCalculator" },
    { name: "Physics", icon: "FaAtom" },
    { name: "Chemistry", icon: "FaFlask" },
    { name: "Biology", icon: "FaMicroscope" },
    { name: "Computer Science", icon: "FaCode" },
    { name: "Pakistan Studies", icon: "FaLandmark" },
    { name: "Islamic Studies", icon: "FaLandmark" }
  ],
  secondary: [
    { name: "Advanced Mathematics", icon: "FaCalculator" },
    { name: "Physics", icon: "FaAtom" },
    { name: "Chemistry", icon: "FaFlask" },
    { name: "Biology", icon: "FaMicroscope" },
    { name: "Computer Science", icon: "FaCode" },
    { name: "Economics", icon: "FaChartLine" },
    { name: "Business Studies", icon: "FaBriefcase" },
    { name: "Accounting", icon: "FaDollarSign" }
  ]
};

export const events = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "2024-03-15",
    time: "9:00 AM - 3:00 PM",
    location: "School Ground",
    description: "Annual sports competition featuring various athletic events and games.",
    icon: "FaRunning"
  },
  {
    id: 2,
    title: "Science Fair Exhibition",
    date: "2024-03-22",
    time: "10:00 AM - 2:00 PM",
    location: "Science Block",
    description: "Students showcase their innovative science projects and experiments.",
    icon: "FaFlask"
  },
  {
    id: 3,
    title: "Cultural Festival",
    date: "2024-04-05",
    time: "11:00 AM - 4:00 PM",
    location: "School Auditorium",
    description: "Celebration of cultural diversity with performances and food stalls.",
    icon: "FaTheaterMasks"
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    date: "2024-04-12",
    time: "2:00 PM - 5:00 PM",
    location: "Main Building",
    description: "Quarterly meeting between parents and teachers to discuss student progress.",
    icon: "FaUsers"
  }
];

// Helper function to get icon component
export const getIconComponent = (iconName) => {
  return iconMap[iconName] || FaRegCalendarCheck;
};

// Icon mapping object
export const iconMap = {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaSchool,
  FaFootballBall,
  FaBook,
  FaFlask,
  FaLaptop,
  FaMusic,
  FaPalette,
  FaRunning,
  FaUserGraduate,
  FaUsers,
  FaHistory,
  FaBullseye,
  FaEye,
  FaMicroscope,
  FaTheaterMasks,
  FaProjectDiagram,
  FaCalculator,
  FaGlobeAmericas,
  FaAtom,
  FaCode,
  FaLandmark,
  FaChartLine,
  FaBriefcase,
  FaDollarSign,
  SiGoogleclassroom
};