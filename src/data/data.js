export const dataProjects = [
    {
        title: "TaxPri — Cross-Border Tax Assistant",
        description: "TaxPri is an open-source, rule-based consultation platform for people who live and work across European borders.",
        tech: ["React", "TailwindCSS", "Typescript", "Node.js", "PostgreSQL", "Express", "Zod", "Prisma", "API RESTful"],
        github: "https://github.com/rafaelmerlotto/Cross-Border-Tax-Assistant",
        demo: "https://taxpri.vercel.app",
        image: "https://i.imgur.com/HW6HrQA.png",
        type: "Full Stack"
    },
    {
        title: "BatchCrafted SaaS",
        description: "BatchCrafted is a SaaS platform designed for homebrewers to efficiently manage their brewing process from start to finish. It provides an intuitive interface to track recipes, log brewing sessions, monitor fermentation progress, and analyze batch performance.",
        tech: ["Ruby on Rails", "OAuth2", "PostgreSQL", "API RESTful", "Docker", "Stripe"],
        github: "https://github.com/rafaelmerlotto",
        demo: "https://www.batchcrafted.com",
        image: "https://i.imgur.com/Q0diYJ1.png",
        type: "Full Stack"
    },
    {
        title: "Ollama DSL",
        description: "A Ruby DSL for interacting with Ollama LLMs, allowing streaming and structured prompts. Ollama DSL provides an easy-to-use Ruby interface to communicate with Ollama local or remote language models. It supports building prompts with system/user roles, handling streaming responses, and chaining prompts seamlessly.",
        tech: ["Ruby", "Ollama", "Bundler", "Rspec"],
        github: "https://github.com/rafaelmerlotto/ollama-dsl",
        demo: "https://rubygems.org/gems/ollama-dsl",
        image: "https://i.imgur.com/RQZjAI6.png",
        type: "Library"
    },
    {
        title: "Euro to Lira Converter Gem",
        description: "A Ruby gem that converts between Euro and Italian Lira using the fixed official rate (1 EUR = 1936.27 ITL). Includes validation, tests with RSpec, and easy integration into Rails apps.",
        tech: ["Ruby", "RSpec", "Bundler", "Rails"],
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