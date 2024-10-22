import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import { oracle, qest, gdsc, samudra } from "../public";
// import gdsc from "@/public/gdsc.png";
// import qest from "@/public/qest.png";
// import samudra from "@/public/samudra.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experiences",
    hash: "#experiences",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Server Technology Intern",
    location: "Oracle",
    description:
      "Contributed to the OCI Networking team, working on cloud-based networking solutions. Gained in-depth understanding of OCI architecture and its core networking components. Enhanced knowledge of cloud networking protocols, troubleshooting techniques, and issue escalation processes. Analyzed customer-reported issues related to OCI networking.",
    icon: oracle,
    date: "May 2024 - July 2024",
    points: [
      "Contributed to the OCI Networking team, working on cloud-based networking solutions.",
      "Gained in-depth understanding of OCI architecture and its core networking components.",
      "Enhanced knowledge of cloud networking protocols, troubleshooting techniques, and issue escalation processes.",
      "Analyzed customer-reported issues related to OCI networking",
    ],
  },
  {
    title: "Web Development Intern",
    location: "Qest",
    description:
      "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for mechants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.",
    icon: qest,
    date: "March 2024 - May 2024",
    points: [
      "Developed and maintained web applications using AngularJs enhancing user interface and performance.",
      "Assisted in backend development with NodeJs and ExpressJs, contributing to the creation of RESTful APIs",
      "Participated in code reviews, contributing to cleaner, more maintainable code.",
      "Actively participated in daily stand-up meetings to discuss project progress.",
    ],
  },
  {
    title: "ML and Backend Developer",
    location: "COEAI",
    description:
      "Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.",
    icon: samudra,
    date: "July 2024 - September 2024",
    points: [
      "Developed an app that suggests safe routes to users using KNN for safety score calculations.",
      "Built and maintained the backend using Flask and machine learning techniques to analyze crime data and accident data",
      "Several other feature like chatbot, live location sharing and SOS were implemented ",
      "Presented the app under Project SAMUDRA to the IIT Delhi panel, earning high appreciation.",
    ],
  },
  {
    title: "App Developer Lead",
    location: "GDSC",
    description:
      "Software engineer in the intelliHR platform team. We are a feature enablement team dedicated to developing features for developers, ensuring they are easier to create. We also look after issues of scale and technical debt for developers and the platform.",
    icon: gdsc,
    date: "Feb 2023 - May 2024",
    points: [
      "Led the development and deployment of mobile application as part of GDSC.",
      "Organized workshops on app development, teaching others about new tools and techniques.",
      "Used Google tools like Firebase, Flutter, and Cloud in app development to add more features.",
      "Helped with GDSC events and hackathons, guiding younger developers and promoting teamwork.",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Find Loved Ones",
    description:
      "Mobile application that enables community based lost person locator which aimed at assisting users in locating lost friends and family members.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: ["logos:flutter", "logos:python", "logos:firebase"],
    imageUrl: cryptoCrowdImg,
    githubLink: "https://github.com/orgs/EnigmaEnforcers/repositories",
    // demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "Streamify",
    description:
      "Web application for interactive video streaming which uses RTMP/WHIP protocoles and other features such as real time chat, user authentication folow/unfollow user.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:nextjs-icon",
      "logos:nodejs",
      "logos:express",
      "logos:postgresql",
      // "logos:javascript",
      "devicon:tailwindcss",
      // "devicon: next",
    ],
    imageUrl: ozdevsImg,
    // urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/deepanshu0304/Streamify",
  },
  {
    title: "Exam Invigilation",
    description:
      "Mobile application that uses face-recognition model for efficient exam invigilation such as student verification, attendance tracking.",
    tags: ["Java", "MariaDB", "Swing"],
    icons: ["logos:flutter", "logos:flask", "logos:python", "logos:firebase"],
    imageUrl: assetTradingImg,
    githubLink: "https://github.com/orgs/Exam-Face-Verifier/repositories",
  },
  // {
  //   title: "Euphorus",
  //   description:
  //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "React", "Bootstrap"],
  //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
  //   imageUrl: euphorusImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
  // },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  // {
  //   title: "Techprowl Computer Auction",
  //   description:
  //     "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
  //   tags: ["Python", "Flask", "Bootstrap", "SQLite"],
  //   icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
  //   imageUrl: techprowlImg,
  //   githubLink: "https://github.com/ben04rogers/computer-auction",
  //   urlLink: "https://techprowl.herokuapp.com",
  // },
  // {
  //   title: "Task Manager Console App",
  //   description:
  //     "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
  //   tags: ["C#"],
  //   icons: ["devicon:csharp"],
  //   imageUrl: taskManagerImg,
  //   githubLink: "https://github.com/ben04rogers/task-manager",
  // },
  // {
  //   title: "Family Tree Shortest Path",
  //   description:
  //     "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
  //   tags: ["Python"],
  //   icons: ["logos:python"],
  //   imageUrl: familyTreeImg,
  //   githubLink: "https://github.com/ben04rogers/breadth-first-search",
  //   demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  // },
  // {
  //   title: "Arduino Binary Game",
  //   description:
  //     "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
  //   tags: ["C"],
  //   icons: ["devicon:c"],
  //   imageUrl: binaryGameImg,
  //   githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
  //   demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  // },
] as const;

export const skillsData = [
  {
    name: "Flutter",
    icon: "logos:flutter",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "Angular JS",
    icon: "logos:angular-icon",
  },
  {
    name: "Next JS",
    icon: "logos:nextjs-icon",
  },
  {
    name: "React JS",
    icon: "logos:react",
  },
  {
    name: "Node js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Flask",
    icon: "logos:flask",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
  },
  {
    name: "PostgreSql",
    icon: "logos:postgresql",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
] as const;
