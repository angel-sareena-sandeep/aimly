import { Career } from "../types";

export const careers: Career[] = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    description: "Builds intelligent systems using data and machine learning.",
    overview:
      "AI Engineers combine coding, analytics, and experimentation to build useful AI-powered products.",
    skillsNeeded: ["Python", "Machine Learning", "Data Structures"],
    strengths: {
      hobbies: [
        "Coding",
        "Robotics",
        "Puzzle Solving",
        "Chess",
        "AI Experiments",
        "Building PCs"
      ],
      interestsPreference: ["Analytical Work"],
      favoriteSubjects: ["Math", "Science"],
      workStyles: ["Independent", "Hybrid"]
    },
    whyFitTemplates: [
      "You enjoy technical problem solving and AI-focused hobbies.",
      "Your profile aligns with analytical thinking and strong STEM interests.",
      "You show strong potential for project-based AI learning."
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        items: ["Python Basics", "Statistics", "Data Analysis"]
      },
      {
        phase: "Phase 2",
        items: ["Machine Learning", "Neural Networks"]
      },
      {
        phase: "Phase 3",
        items: ["Build Projects", "AI Portfolio"]
      }
    ],
    first30Days: [
      "Finish one Python fundamentals course.",
      "Build a tiny model with a simple dataset.",
      "Publish your first AI mini project on GitHub."
    ],
    defaultMilestones: [
      { id: "ai-m1", label: "Python Basics", status: "done" },
      { id: "ai-m2", label: "Statistics", status: "in-progress" },
      { id: "ai-m3", label: "Machine Learning", status: "locked" }
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Turns raw data into clear insights for business decisions.",
    overview:
      "Data Analysts use structured thinking, statistics, and storytelling to solve real-world business problems.",
    skillsNeeded: ["SQL", "Data Visualization", "Statistics"],
    strengths: {
      hobbies: ["Data Visualization", "Researching Topics", "Puzzle Solving", "Chess"],
      interestsPreference: ["Analytical Work"],
      favoriteSubjects: ["Math", "Science"],
      workStyles: ["Independent", "Hybrid", "Team-based"]
    },
    whyFitTemplates: [
      "You enjoy insight-oriented hobbies that match analytics work.",
      "Your profile suggests strong fit for structured data thinking.",
      "You can grow quickly in data storytelling and reporting."
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        items: ["Excel Fundamentals", "SQL Basics", "Data Cleaning"]
      },
      {
        phase: "Phase 2",
        items: ["Advanced SQL", "Dashboard Design"]
      },
      {
        phase: "Phase 3",
        items: ["Business Case Studies", "Analytics Portfolio"]
      }
    ],
    first30Days: [
      "Practice SQL queries daily.",
      "Create one dashboard from sample data.",
      "Write short insights from your analysis."
    ],
    defaultMilestones: [
      { id: "da-m1", label: "SQL Basics", status: "done" },
      { id: "da-m2", label: "Dashboard Design", status: "in-progress" },
      { id: "da-m3", label: "Analytics Portfolio", status: "locked" }
    ]
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description: "Designs intuitive, user-friendly digital experiences.",
    overview:
      "UI/UX Designers mix creativity and user empathy to create interfaces people enjoy using.",
    skillsNeeded: ["Figma", "Wireframing", "User Research"],
    strengths: {
      hobbies: [
        "Photography",
        "Drawing",
        "Digital Art",
        "Graphic Design",
        "Story Writing",
        "Animation"
      ],
      interestsPreference: ["Creative Work"],
      favoriteSubjects: ["Design"],
      workStyles: ["Independent", "Hybrid", "Team-based"]
    },
    whyFitTemplates: [
      "Your creative hobbies align with design thinking.",
      "You show strong potential for visual and user-centered work.",
      "Your profile fits iterative design and prototyping paths."
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        items: ["Design Principles", "Figma Basics", "Wireframing"]
      },
      {
        phase: "Phase 2",
        items: ["UX Research", "Interactive Prototyping"]
      },
      {
        phase: "Phase 3",
        items: ["Case Studies", "Design Portfolio"]
      }
    ],
    first30Days: [
      "Redesign one app screen in Figma.",
      "Run 3 quick user feedback interviews.",
      "Publish your first design case study draft."
    ],
    defaultMilestones: [
      { id: "ux-m1", label: "Figma Basics", status: "done" },
      { id: "ux-m2", label: "UX Research", status: "in-progress" },
      { id: "ux-m3", label: "Design Portfolio", status: "locked" }
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Aligns users, business goals, and teams to ship impactful products.",
    overview:
      "Product Managers define priorities, coordinate teams, and make sure the right problems are solved.",
    skillsNeeded: ["Communication", "Prioritization", "Product Thinking"],
    strengths: {
      hobbies: ["Blogging", "Content Creation", "Podcasting", "Strategy Games"],
      interestsPreference: ["People Interaction", "Exploration"],
      favoriteSubjects: ["Business"],
      workStyles: ["Team-based", "Hybrid"]
    },
    whyFitTemplates: [
      "You enjoy people-focused and strategy-oriented activities.",
      "Your profile shows alignment with collaborative product work.",
      "You can grow fast in planning and execution roles."
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        items: ["Product Basics", "User Problems", "Communication Skills"]
      },
      {
        phase: "Phase 2",
        items: ["PRD Writing", "Prioritization Frameworks"]
      },
      {
        phase: "Phase 3",
        items: ["Launch Projects", "Product Case Portfolio"]
      }
    ],
    first30Days: [
      "Analyze one app and suggest improvements.",
      "Write a mini product spec.",
      "Practice a weekly feature prioritization exercise."
    ],
    defaultMilestones: [
      { id: "pm-m1", label: "Product Basics", status: "done" },
      { id: "pm-m2", label: "PRD Writing", status: "in-progress" },
      { id: "pm-m3", label: "Product Case Portfolio", status: "locked" }
    ]
  }
];
