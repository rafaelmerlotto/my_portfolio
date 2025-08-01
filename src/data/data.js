export const dataProjects = [
    {
        title: "SaaS Platform",
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
        demo: "https://www.batchcrafted.com",
        image: "https://i.imgur.com/kHp1pCB.png",
        type: "Full Stack"
    },
    {
        title: "Centralized Ordering and Marketing System",
        description: "A platform that started as an e- commerce and expanded to manage supply orders and marketing campaigns, enabling centralized purchasing and promotions across all restaurants.",
        tech: ["Ruby on Rails", "Solidus", "MySQL", "Docker", "Microsoft OAuth", "Nginx on Ubuntu", "Digital Ocean"],
        github: "https://github.com/rafaelmerlotto",
        demo: "https://rafaelmerlotto.tech",
        image: "https://i.imgur.com/Ys9rtBB.png",
        type: "Full Stack"
    },
    {
        title: "Multi-Tenant Web Application",
        description: "A large-scale, multi-tenant web application designed to handle multiple clients with separate data and user bases. The app manages [briefly describe features, e.g., “documents, team collaboration, and real-time notifications”].",
        tech: ["Ruby on Rails", "Redis", "Elasticsearch", "Docker", "MySQL", "AI agents"],
        github: "https://github.com/rafaelmerlotto",
        demo: "https://rafaelmerlotto.tech",
        image: "https://i.imgur.com/D7cByog.png",
        type: "Full Stack"
    },
    // {
    //     title: "AI Telegram & WhatsApp Bot with Ollama",
    //     description: "This project creates a smart chatbot for Telegram and WhatsApp. Users chat with it like a friend, while Ollama AI provides natural and helpful replies in the background.",
    //     tech: ["Node.js", "Typescript", "axios", "TelegramBot", "WhatsappBot", "Ollama"],
    //     github: "https://github.com/rafaelmerlotto/bot-pack",
    //     demo: "https://rafaelmerlotto.tech",
    //     image: "https://i.imgur.com/PBTxMuw.png",
    //     type: "Backend"
    // },
    // {
    //     title: "Slack Automation Bot",
    //     description: "A Slack bot that automates sending messages to users, channels, and groups. It retrieves events from Google Calendar using the Google API and sends customized notifications for the current day's events.",
    //     tech: ["Node.js", "SlackBots", "Google Calendar API", "Express", "Docker"],
    //     github: "https://github.com/rafaelmerlotto/automation_bot_slack",
    //     demo: "https://rafaelmerlotto.tech",
    //     image: "https://i.imgur.com/DMOu69y.jpeg",
    //     type: "Backend"
    // }

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