import {
  backend,
  bootstrap,
  ConnectDesk,
  creator,
  css,
  ExpressJs,
  figma,
  firebase,
  git,
  github,
  html,
  inmogr,
  InvestorInsights,
  javascript,
  lifeRecovery,
  mobile,
  mongodb,
  mySQL,
  NextJs,
  nodejs,
  php,
  query,
  reactjs,
  redux,
  sass,
  styledComponents,
  tailwind,
  TheSultanLuxuryHotel,
  ticoli,
  travelAgency,
  typescript,
  VSCode,
  web,
  WordPress,
} from "~/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: ExpressJs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "VS Code",
    icon: VSCode,
  },
];

const test = [
  {
    name: "NextJs",
    icon: NextJs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "styled-components",
    icon: styledComponents,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "React Query",
    icon: query,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "WordPress",
    icon: WordPress,
  },
  {
    name: "WordPress",
    icon: mySQL,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Inmogr",
    icon: inmogr,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  /* 
    {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  */
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Connect Desk",
    description:
      "ConnectDesk is a software development company. The company works with business solutions for SME traders.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "blue-text-gradient",
      },
      {
        name: "daisy UI",
        color: "pink-text-gradient",
      },
      {
        name: "formik",
        color: "orange-text-gradient",
      },
      {
        name: "yup",
        color: "green-text-gradient",
      },
    ],
    image: ConnectDesk,
    live_link: "https://connect-desk-bh.vercel.app",
    source_code_link: "https://github.com/Shahriyar-Hosen",
  },
  {
    name: "Life Recovery",
    description:
      "This is an Islamic application. Through this, users can keep track of their daily activities, which will act as reminders.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "blue-text-gradient",
      },
      {
        name: "RTK Query",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "moment",
        color: "green-text-gradient",
      },
    ],
    image: lifeRecovery,
    live_link: "https://life-recovery-f582f.web.app/",
    source_code_link: "https://github.com/Shahriyar-Hosen",
  },
  {
    name: "Investor Insights",
    description:
      "Your go-to resource for insightful investment tips, expert stock market advice, and in-depth stock analysis. We're here to provide the guidance you need to make informed decisions and secure your financial future.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "next-auth",
        color: "orange-text-gradient",
      },
    ],
    image: InvestorInsights,
    live_link: "https://investor-hints.vercel.app/",
    source_code_link: "https://github.com/Shahriyar-Hosen",
  },
  {
    name: "Ticoli",
    description:
      "Tech and art enthusiasts are collaborating to create an engaging solution for children's education, addressing the issue of screen time diminishing their interest in learning.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "blue-text-gradient",
      },
    ],
    image: ticoli,
    live_link: "https://ticoli.vercel.app/",
    source_code_link: "https://github.com/Shahriyar-Hosen",
  },
  {
    name: "The Sultan Luxury hotel",
    description:
      "The Sultan Luxury hotel is a hotel facilities and room booking website.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "blue-text-gradient",
      },
      {
        name: "Context-API",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: TheSultanLuxuryHotel,
    live_link: "https://sultan-luxury-hotel.web.app/",
    source_code_link: "https://github.com/Shahriyar-Hosen",
  },
  {
    name: "Travel Agency",
    description:
      "This is a travel agency and booking website. This app is help full for travelers. Through it, travelers can get ideas about different places and can get details or ideas about that place.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: travelAgency,
    live_link: "https://traveling-agency.web.app/",
    source_code_link: "https://github.com/Shahriyar-Hosen",
  },
];

// " " Means <br/>
const about = [
  `I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React, Redux, and Node.js.`,
  " ",
  " ",
  `I'm passionate about building excellent software that improves the lives
  of those around me. I specialize in creating software for clients ranging
  from individuals and small businesses to large enterprise corporations.`,
  " ",
  " ",
  `I'm a quick learner and collaborate closely with clients to create
  efficient, scalable, and user-friendly solutions that solve real-world
  problems. Let's work together to bring your ideas to life! What would you
  do if you had a software expert available at your fingertips?`,
];

export { about, experiences, projects, services, technologies, testimonials };
