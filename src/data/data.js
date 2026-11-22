export const dataProjects = [
    {
        title: "TaxPri — Cross-Border Tax Assistant",
        description: "TaxPri is an open-source, rule-based consultation platform for people who live and work across European borders.",
        tech: [
            { tech: "React", icon: "react" },
            { tech: "TailwindCSS", icon: "tailwindcss" },
            { tech: "Typescript", icon: "typescript" },
            { tech: "Nodejs", icon: "nodejs" },
            { tech: "PostgreSQL", icon: "postgresql" },
            { tech: "Expressjs", icon: "expressjs" },
            { tech: "Zod", icon: "zod" },
            { tech: "Prisma", icon: "prisma" },
            { tech: "API RESTful", icon: "API RESTful" },
        ],
        github: "https://github.com/rafaelmerlotto/Cross-Border-Tax-Assistant",
        demo: "https://taxpri.vercel.app",
        image: "https://i.imgur.com/HW6HrQA.png",
        type: "Full Stack"
    },
    {
        title: "BatchCrafted SaaS",
        description: "BatchCrafted is a SaaS platform designed for homebrewers to efficiently manage their brewing process from start to finish. It provides an intuitive interface to track recipes, log brewing sessions, monitor fermentation progress, and analyze batch performance.",
        tech: [
            { tech: "Ruby on Rails", icon: "rails" },
            { tech: "OAuth2", icon: "oauth" },
            { tech: "PostgreSQL", icon: "postgresql" },
            { tech: "API RESTful", icon: "API RESTful" },
            { tech: "Docker", icon: "docker" },
            { tech: "Stripe", icon: "stripe" },
        ],
        github: "https://github.com/rafaelmerlotto",
        demo: "https://www.batchcrafted.com",
        image: "https://i.imgur.com/Q0diYJ1.png",
        type: "Full Stack"
    },
    {
        title: "Ollama DSL",
        description: "A Ruby DSL for interacting with Ollama LLMs, allowing streaming and structured prompts. Ollama DSL provides an easy-to-use Ruby interface to communicate with Ollama local or remote language models. It supports building prompts with system/user roles, handling streaming responses, and chaining prompts seamlessly.",
        tech: [
            { tech: "Ruby", icon: "ruby" },
            { tech: "Ollama", icon: "ollama" },
            { tech: "Bundler", icon: "bundler" },
            { tech: "Rspec", icon: "rspec" },
        ],
        github: "https://github.com/rafaelmerlotto/ollama-dsl",
        demo: "https://rubygems.org/gems/ollama-dsl",
        image: "https://i.imgur.com/RQZjAI6.png",
        type: "Library"
    },
    {
        title: "Euro to Lira Converter Gem",
        description: "A Ruby gem that converts between Euro and Italian Lira using the fixed official rate (1 EUR = 1936.27 ITL). Includes validation, tests with RSpec, and easy integration into Rails apps.",
        tech: [
            { tech: "Ruby", icon: "ruby" },
            { tech: "Rspec", icon: "rspec" },
            { tech: "Bundler", icon: "bundler" },
            { tech: "Rails", icon: "rails" },
        ],
        github: "https://github.com/rafaelmerlotto/euro_to_lira",
        demo: "https://rubygems.org/gems/euro_to_lira",
        image: "https://i.imgur.com/crf7LRD.png",
        type: "Library"
    },
];

export const skills = {
    languages: [
        { name: "JavaScript", level: 100, years: 3 },
        { name: "TypeScript", level: 100, years: 3 },
        { name: "Ruby", level: 100, years: 2 },
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

export const projectTypeColor = {
    "Full Stack": "from-cyan-700 to-cyan-800",
    "Backend": "from-orange-700 to-orange-800",
    "Frontend": "from-sky-700 to-sky-800",
    "Library": "from-amber-700 to-amber-800",
};