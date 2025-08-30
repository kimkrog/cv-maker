export interface PersonalInfo {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  image?: string;
  summary: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  websites?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  institution: string;
  year: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5 scale
  category: 'Technical' | 'Tools';
}

export interface Language {
  id: string;
  name: string;
  level: number; // 1-5 scale
}

export interface CVData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: EducationItem[];
  publications: Publication[];
  skills: Skill[];
  languages: Language[];
  interests: string[];
}

export const defaultCVData: CVData = {
  personalInfo: {
    name: "KIM KROG",
    jobTitle: "Frontend Developer",
    email: "kimkrog@gmail.com",
    phone: "+45 27205452",
    location: "Thorsgade 22, 9000 Aalborg",
    linkedin: "linkedin.com/in/kimkrog",
    summary: "With several years of web development experience and education from Aalborg University, I've developed a solid skill set for analyzing design challenges and creating user-friendly solutions. My expertise spans both frontend and backend development, allowing me to deliver functionality and designs that are not only visually appealing but also intuitive across all screen sizes and devices. I prioritize code readability and reusability, ensuring my frontend work is optimized for speed and accessibility. I thrive in collaborative settings, working closely with experts in UX, design, and SEO. At the same time, I'm confident enough to speak up and suggest improvements when I see potential for optimization."
  },
  workExperience: [
    {
      id: "1",
      title: "Web Developer",
      company: "Peytz",
      period: "2016 - Now",
      description: "As frontend lead at Peytz' Wordpress department, I've played a central role in creating and optimizing numerous websites, shaping the company's approach to developing WordPress sites and plugins. One of my key responsibilities is project estimation, where I evaluate the design and functionality to determine the scope of work and allocate appropriate resources. I often interact with clients, working to understand their needs and recommend the best solutions.\n\nIn this role, I've taken full responsibility of training and mentoring newer employees, as well as encouraging knowledge sharing within my department and across other teams.",
      responsibilities: [
        "Custom Wordpress theme & plugin development",
        "Analysis and implementation of Sketch / XD / PS designs",
        "Gutenberg/React applications"
      ],
      websites: ["videnskab.dk", "scleroseforeningen.dk", "taktoph.com"]
    },
    {
      id: "2",
      title: "Web Developer",
      company: "CompanYoung",
      period: "2015 - 2015",
      description: "Development of WordPress sites and Facebook Apps in PHP, HTML, CSS, JS & Bootstrap, Advanced Custom Fields, MySQL.",
      responsibilities: [],
      websites: []
    },
    // {
    //   id: "3",
    //   title: "Instructor",
    //   company: "Dansk Oplysnings Forbund",
    //   period: "2015 - 2015",
    //   description: "Instructor in Adobe Elements with responsibility for creating and structuring the course",
    //   responsibilities: [],
    //   websites: []
    // },
    // {
    //   id: "4",
    //   title: "Instructor",
    //   company: "Den Rytmiske, Nordkraft",
    //   period: "2014 - 2015",
    //   description: "Instructor in Ableton Live with responsibility for creating and structuring the course",
    //   responsibilities: [],
    //   websites: []
    // }
  ],
  education: [
    {
      id: "1",
      degree: "M.Sc. in Medialogy",
      institution: "Aalborg University",
      period: "2008 - 2013",
      description: "Medialogy focuses on research in technology and creativity, and moves within the areas of work: Programming (C++, C#, JS and others), Human-machine interaction (HCI); Usability and user experience (UX); Computer graphics and design; Design, analysis and evaluation of experiments; Measurement of User Experience e.g. using observation, questionnaire and focus group"
    }
  ],
  publications: [
    {
      id: "1",
      title: "Using a Graphics Turing Test to Evaluate the Effect of Frame Rate and Motion Blur on Telepresence of Animated Objects",
      institution: "Aalborg University",
      year: "2013"
    },
    {
      id: "2",
      title: "Software-Based Adjustment of Mobile Autostereoscopic Graphics Using Static Parallax Barriers",
      institution: "Aalborg University",
      year: "2012"
    }
  ],
  skills: [
    { id: "1", name: "WordPress", level: 5, category: "Technical" },
    { id: "2", name: "HTML5 / CSS3", level: 5, category: "Technical" },
    { id: "3", name: "Tailwind / Webpack", level: 4, category: "Technical" },
    { id: "4", name: "PHP", level: 4, category: "Technical" },
    { id: "5", name: "Git", level: 4, category: "Technical" },
    { id: "6", name: "JavaScript", level: 4, category: "Technical" },
    { id: "7", name: "React / Next.js", level: 4, category: "Technical" },
    { id: "8", name: "TypeScript", level: 3, category: "Technical" },
    { id: "9", name: "Figma / XD / Sketch", level: 4, category: "Tools" },
    { id: "10", name: "Jira", level: 5, category: "Tools" }
  ],
  languages: [
    { id: "1", name: "Danish", level: 5 },
    { id: "2", name: "English", level: 4 }
  ],
  interests: [
    "Programming",
    "Home Automation",
    "Design / Motion Graphics",
    "DJ'ing / Music production",
    "Sports: Badminton, padel, football"
  ]
};
