import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aaron Santana",
  initials: "Savaldev",
  url: "https://savaldev.com",
  location: "San José, CR",
  locationLink: "https://maps.app.goo.gl/b8aC2BnE5NnrYREs9",
  description:
    "I'm a Fullstack Software Engineer who loves getting into trouble (and then solving it). I enjoy exploring crazy ideas, learning new things on demand, and yes, I'm a big Formula 1 fan.",
  summary:
    "My journey into tech started back in 2019—yes, during the pandemic—when I was stuck at home with way too much free time. One random YouTube video about building websites popped up, and that was it. Something clicked. I’ve always been self-taught and endlessly curious, so diving into the world of software felt natural. In 2022, I officially began my Software Engineering degree at the University of Costa Rica, where I’m now in my final year. But I never limited myself to what’s taught in the classroom. Along the way, I’ve built freelance projects, developed platforms for research centers at the university, and even created an app for a social impact initiative. Each project has pushed me to grow, explore bold ideas, and build software that actually matters.",
  avatarUrl: "/me.jpeg",
  skills: {
    relevant: [
      "React",
      "Typescript",
      "React Native",
      "Express",
      ".NET Core",
      "MySQL",
      "Docker",
    ],
    frontend: [
      "React",
      "Next.js",
      "React Native",
      "Typescript",
      "TailwindCSS",
      "Redux",
      "HTML",
      "CSS",
    ],
    backend: ["Express.js", "Nest.js", ".NET Core"],
    devops: [
      "Docker",
      "Coolify",
      "Github Actions",
      "CI/CD",
      "Vercel",
      "Netlify",
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Redis",
      "Prisma ORM",
    ],
    AI: ["Codex", "N8N", "Claude Code"],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@savaldev.com",
    tel: "+50687156553",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Santaval",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aaronsantanavaldelomar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/savaldev",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@savaldev",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:contact@savaldev.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "UCR — VIVE (Volunta UCR)",
      badges: ["Part-time"],
      href: "https://volunta.ucr.ac.cr",
      location: "Remote",
      title: "Student Software Developer",
      logoUrl: "/ucr.png",
      start: "Jan 2026",
      end: "Present",
      description: `Rebuilt Volunta, UCR's official volunteering platform, from scratch — replacing a legacy system in use since 2007 — using .NET, Blazor, and Oracle DB.
        Delivered project and group management for administrators as the MVP, then built a reporting module powered by background queues and cron jobs to measure the program's social impact.
        Gave the admin team full operational visibility through real-time dashboards; the platform serves 200+ students per month across 10 volunteering projects.`,
    },
    {
      company: "UCR — CICIMA (Biomímesis)",
      badges: ["Part-time"],
      href: "https://volunta.ucr.ac.cr",
      location: "Remote",
      title: "Student Software Developer",
      logoUrl: "/ucr.png",
      start: "Mar 2024",
      end: "Dec 2025",
      description: `Built the digital ecosystem for Biomímesis, a research collective, as three connected products: the main site, Códice Alado, and Biofonía.
         Designed gamified, nature-inspired interfaces and interactive data visualizations that make scientific biological data accessible to non-technical audiences.
        Developed an admin panel so researchers can publish and manage content without developer support.`,
    },
    {
      company: "Tiquicia Express",
      badges: ["Freelance"],
      href: "https://tiquiciaexpress.com",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/TE.png",
      start: "Mar 2023",
      end: "Nov 2025",
      description: `Built a US-to-Costa Rica package forwarding platform end to end: customer sign-up with automatic US mailbox assignment, package prealerts, shipment tracking, and a shipping cost calculator.
        The platform has processed 13,000+ packages (33,000+ lbs) for 1,400+ registered users.
        Developed the customer portal and back-office tools used to receive and process packages.
`,
    },
    {
      company: "Proactiva",
      href: "https://proactivacr.net",
      badges: ["Freelance", "Maintenance"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/proactiva.webp",
      start: "May 2022",
      end: "Present",
      description: `Replaced a gym's whiteboard-based operations with a web platform for class scheduling, member management, recurring activities, and role-based access (admin, trainer).
        Handled concurrent bookings for limited-capacity classes to prevent overbooking, and integrated Resend for automated email notifications.
        Reduced administrative workload from several trainers to a single person; maintaining the system in production since 2022.`,
    },
  ],
  education: [
    {
      school: "Universidad de Costa Rica",
      href: "https://ucr.ac.cr",
      degree: "Bachelor's Degree in Software Engineering",
      logoUrl: "/ucr.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Volunta UCR",
      href: "https://volunta.ucr.ac.cr",
      dates: "2026",
      active: true,
      description:
        "Volunta is the official UCR platform for the volunteering program. They needed a **completely new system** because the previous one was outdated (dating back to 2007). The **primary challenge** was to **provide** a user-friendly experience and **build a comprehensive reporting system**. I built a project management system **that provided admins with** a way to create and manage projects and their respective groups, which served as the MVP **before starting to build all** the reporting features. For this project, I worked with background **queues** and **cron jobs** that ran scheduled tasks to generate reports on project performance and measure the program's social impact across different areas. **After completing** the system, students noted that the new platform was much better than the old one, and the administrative team now has **full visibility over all operations** thanks to the new dashboard and reporting tools.",
      technologies: [".NET", "Oracle DB", "Blazor"],
      links: [
        {
          type: "Website",
          href: "https://volunta.ucr.ac.cr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/volunta.png",
      video: "",
    },
    {
      title: "Proactiva",
      href: "https://proactivacr.net",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Proactiva is a special project for me—it was my first real-world system. Proactiva is a gym that offers classes to its customers. The problem they had was that all their **management was done on a whiteboard**, so as the **number of customers started to grow, logistics** became a disaster. To solve this, I created a **core system** where staff could create a class (like Zumba) and customers could book it. Later, I added features like **record management**, recurring activities, and user roles (such as trainer and admin). Before the system, **several trainers** were involved in **administrative** tasks; after implementation, **a single person** was able to **manage everything**. This project was my **first approach** to concurrency problems—since classes had limited capacity—and **it was also** my first non-personal project.",
      technologies: [
        "Next.js",
        "Typescript",
        "ExpressJS",
        "MySQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://proactivacr.net",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/proac-dash.png",
      video: "",
    },

    {
      title: "Biomímesis",
      href: "https://biomimesiscr.net",
      dates: "April 2023 - September 2025",
      active: true,
      description:
        "Biomimesis (CICIMA - Universidad de Costa Rica) **is one of the most creative projects I have been involved in**. BiomimesisCR is a collective of people **who share** biological data. They needed a digital platform made up of a couple of tools (Webpage, Biofonía, and Códice Alado) where they could share their work. To address this, I **built a digital ecosystem** to present complex data in an engaging way. Making technical information accessible and interesting to non-technical users was one of the main challenges, so the solution was to **gamify the platform and draw inspiration from biological elements** for the system's design. I implemented tools to visualize data in an interactive way, along with an admin panel to manage content. After completing the project, the Biomimesis collective had a much stronger platform to showcase their impact to the world.",
      technologies: ["React", "Typescript", "MySQL", "Prisma", "TailwindCSS"],
      links: [
        {
          type: "Biomímesis",
          href: "https://biomimesiscr.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Códice alado",
          href: "https://codicealado.biomimesiscr.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Biofonía",
          href: "https://biofonia.biomimesiscr.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/biomimesis.png",
      video: "",
    },
    {
      title: "Delivo",
      href: "https://appdelivo.com/",
      dates: "Mar 2026",
      active: true,
      description:
        "Delivo was born out of a family need. My uncles run a dairy business that sells products like cheese and milk, among others, to local markets in Guanacaste, Costa Rica. When I was on vacation, I used to help them with product deliveries. One day, I noticed that my uncle frequently backtracked and drove through the same routes multiple times. Moreover, whenever we arrived at a client's address, he had to search through a notebook to find the order details and invoice. To solve this, I built an application that allows businesses to manage clients, products, orders, and delivery routes. The routes can be optimized so that drivers follow the most efficient path to each location. As a result, my uncles saved both time and money by reducing fuel consumption and eliminating manual paper-based tracking.",
      technologies: ["React Native", "ExpressJS", "Google Cloud"],
      links: [
        {
          type: "Website",
          href: "https://appdelivo.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/delivo.png",
      video: "",
    },
  ],
  // `className` controls the bento layout (column/row spans).
  activities: [
    {
      title: "Biomimesis presentation",
      description: "Sharing ideas in front of an audience.",
      image: "/other-activities/biomimesis_presentation.png",
      className: "row-span-2",
    },
    {
      title: "Volunteering",
      description: "Giving back to my community.",
      image: "/other-activities/volunteering.webp",
      className: "col-span-2",
    },
    {
      title: "Goalkeeper",
      description: "Staying active and competing as a team.",
      image: "/other-activities/goalkeeper.webp",
      className: "",
    },
    {
      title: "UCR vocational fair",
      description: "Talking with students about careers in tech.",
      image: "/other-activities/feria_vocaional_ucr.webp",
      className: "",
    },
  ],
  hackathons: [],
} as const;
