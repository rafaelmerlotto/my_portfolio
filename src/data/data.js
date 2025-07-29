export const dataProjects = [
    {
        title: "SaaS platform",
        description: "T-Todoc is a SaaS platform for small professional firms (accountants, lawyers, consultants, etc.) to securely store, organize, and share documents in the cloud. It simplifies deadline tracking and team collaboration.",
        tech: ["React", "Typescript", "TailwindCSS", "Ruby on Rails", "PostgreSQL", "API RESTful"],
        github: "https://github.com/rafaelmerlotto",
        demo: "https://t-todoc.it",
        image: "https://i.imgur.com/UNZl5tT.png",
        type: "Full Stack"
    },
    {
        title: "BatchCrafted SaaS",
        description: "BatchCrafted is a SaaS platform designed for homebrewers to efficiently manage their brewing process from start to finish.\n\
                      It provides an intuitive interface to track recipes, log brewing sessions, monitor fermentation progress, and analyze batch performance.",
        tech: ["Ruby on Rails", "OAuth2", "PostgreSQL", "API RESTful", "Docker", "Stripe"],
        github: "https://github.com/rafaelmerlotto",
        demo: "https://batchcrafted.com",
        image: "https://i.imgur.com/kHp1pCB.png",
        type: "Full Stack"
    },
    {
        title: "Tracker finance",
        description: "This application was developed with the aim of personal finance management. It gives the user the ability to save or delete income,\n\
                     expenses, and savings with real-time updates. Additionally, there is a functionality that allows the user to switch between five different currencies.",
        tech: ["React", "TailwindCSS", "Node.js", "Express.js", "Typescript", "MongoDB", "Docker"],
        github: "https://github.com/rafaelmerlotto/tracker-finance",
        demo: "https://tracker-finance.vercel.app",
        image: "https://i.imgur.com/RBtHDLN.png",
        type: "Full Stack"
    },
    {
        title: "Slack Automation Bot",
        description: "A Slack bot that automates sending messages to users, channels, and groups. It retrieves events from Google Calendar using the Google API and sends customized notifications for the current day's events.",
        tech: ["Node.js", "SlackBots", "Google Calendar API", "Express", "Docker"],
        github: "https://github.com/rafaelmerlotto/automation_bot_slack",
        demo: "https://rafaelmerlotto.tech",
        image: "https://i.imgur.com/DMOu69y.jpeg",
        type: "Backend"
    }

];

export const skills = {
    languages: [
        { name: "JavaScript", level: 100, years: 3 },
        { name: "TypeScript", level: 100, years: 3 },
        { name: "Ruby", level: 100, years: 1 },
    ],
    frontend: [
        { name: "React", level: 100 },
        { name: "TypeScript", level: 100 },
        { name: "Tailwind CSS", level: 100 },
    ],
    backend: [
        { name: "Node.js/Express", level: 100 },
        { name: "Ruby on Rails", level: 100 },
        { name: "PostgreSQL/MongoDB/MySQL", level: 100 },
        { name: "REST APIs", level: 100 }
    ],
    devops: [
        { name: "Docker", level: 100 },
        { name: "Git, CI/CD", level: 100 },
        { name: "Linux Ubuntu", level: 100 }

    ]
};