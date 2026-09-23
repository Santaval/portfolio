import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aaron Santana",
  initials: "Savaldev",
  url: "https://savaldev.com",
  location: "San José, CR",
  locationLink: "https://maps.app.goo.gl/b8aC2BnE5NnrYREs9",
  description:
    "I’m a Fullstack Software Engineer who loves get in trouble (to solve them). I enjoy exploring crazy ideas, learning new things on demand, and yes, I’m a big Formula 1 fan.",
  summary:
    "My journey into tech started back in 2019—yes, during the pandemic—when I was stuck at home with way too much free time. One random YouTube video about building websites popped up, and that was it. Something clicked. I’ve always been self-taught and endlessly curious, so diving into the world of software felt natural. In 2022, I officially began my Software Engineering degree at the University of Costa Rica, where I’m now in my final year. But I never limited myself to what’s taught in the classroom. Along the way, I’ve built freelance projects, developed platforms for research centers at the university, and even created an app for a social impact initiative. Each project has pushed me to grow, explore bold ideas, and build software that actually matters.",
  avatarUrl: "/me.jpeg",
  skills: {
    relevant: [
      "React",
      "Typescript",
      "React Native",
      'Express',
      ".NET Core",
      "MySQL",
      "Docker",
      "Github Actions",
      "Clean Architecture",
      "SOLID Principles",
     ],
    frontend: [
      "React",
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "React Native",
      "Redux",
      "HTML",
      "CSS",
      "Chakra UI",
      "Shadcn UI",
      "Magic UI",
    ],
    backend: [
      "Node.js",
      "Express.js",
      ".NET Core",
      "C#",
      "Python",
      "Django",
      "Flask",
      "REST APIs",
      "GraphQL",
      "PHP"
    ],
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
    softwareEngineering: [
      "Clean Architecture",
      "SOLID Principles",
      "TDD",
      "Agile Methodologies",
      "Scrum",
      "Kanban",
    ],
    productivity: [
      "Notion",
      "Slack",
      "Trello",
      "Jira",
      "Figma",
      "VS Code",
      "Postman",
    ],
    AI: [
      "N8N",
      "OpeanAI",
      "Deepseek"
    ],
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
      company: "Proactiva",
      href: "https://proactivacr.net",
      badges: [
        "Fullstack"
      ],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/proactiva.webp",
      start: "May 2022",
      end: "Mar 2025",
      description:
        "Implemented a full Gym management platform using NextJs, TailwindCSS, Node.js and MySQL. The platform includes features such as member management, class scheduling and reporting. Integrated third-party services such as  Resend for email notifications.",
    },
    {
      company: "Tiquicia Express",
      badges: [
        "Fullstack",
      ],
      href: "https://tiquiciaexpress.com",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/TE.png",
      start: "Mar 2022",
      end: "Jan 2025",
      description:
        "Developed a package delivery management system with real-time order tracking and an intuitive user interface for administrators and clients. Built using React, Node.js, and MySQL, the platform streamlined operations and improved customer satisfaction through efficient package handling and delivery processes.",
    },

  ],
  education: [
    {
      school: "Universidad de Costa Rica",
      href: "https://ucr.ac.cr",
      degree: "Bachelor's Degree of Software Engineering",
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
      technologies: [
        ".NET",
        "Oracle DB",
        "Blazor",
      ],
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
      video:
        "",
    },
    
    {
      title: "Biomímesis",
      href: "https://biomimesiscr.net",
      dates: "April 2023 - September 2025",
      active: true,
      description:
        "Biomimesis (CICIMA - Universidad de Costa Rica) **is one of the most creative projects I have been involved in**. BiomimesisCR is a collective of people **who share** biological data. They needed a digital platform made up of a couple of tools (Webpage, Biofonía, and Códice Alado) where they could share their work. To address this, I **built a digital ecosystem** to present complex data in an engaging way. Making technical information accessible and interesting to non-technical users was one of the main challenges, so the solution was to **gamify the platform and draw inspiration from biological elements** for the system's design. I implemented tools to visualize data in an interactive way, along with an admin panel to manage content. After completing the project, the Biomimesis collective had a much stronger platform to showcase their impact to the world.",
      technologies: [
        "React",
        "Typescript",
        "MySQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Biomímesis",
          href: "https://biomimesiscr.net",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Códice alado",
          href: "https://codicealado.biomimesiscr.net",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Biofonía",
          href: "https://biofonía.biomimesiscr.net",
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
      technologies: [
        "React Native",
        "ExpressJS",
        "Google Cloud",
      ],
      links: [
        {
          type: "Website",
          href: "https://appdelivo.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/delivo.png",
      video:
        "",
    }
  ],
  hackathons: [
    {
      title: "Resend Hackathon",
      dates: "November 23rd - 25th, 2025",
      location: "",
      description:
        "Develop a tool that use Resend MCP, I built a repository resume generator to help devs teams to get context of a github repo content",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
