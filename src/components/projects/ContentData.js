import imgtodo from '../../images/img/todopic.png'
import imgtrackerFinance from '../../images/img/app-tracker-responsive.png'
import imgBlogMedia from '../../images/img/blog-media.png'
import imgAIVoices from '../../images/img/ai-voices.png'
import imgTasks from '../../images/img/tasks.png'

export const projectsData = [
    {
        title: 'Tracker finance',
        description: "This application was developed with the aim of personal finance management. It gives the user the ability to save or delete income,\n\
         expenses, and savings with real-time updates. Additionally, there is a functionality that allows the user to switch between five different currencies.",
        img: imgtrackerFinance,
        imgLink: "https://i.imgur.com/iufJsBt.png",
        link: 'https://github.com/rafaelmerlotto/tracker-finance',
    },
    {
        title: 'Project Blog',
        description: "This blog was developed with the intention of empowering users to share their thoughts freely. The homepage features fields for creating posts,\n\
         including the title and body. Beneath, there is a list of the user's posts for easy management. The Timeline page showcases all posts published by users, \n\
         offering the opportunity to comment on any post of interest. The My Account section provides profile management options, allowing users to modify personal data, \n\
         change passwords, and delete accounts if needed.",
        img: imgBlogMedia,
        imgLink: "https://i.imgur.com/NIU22IW.png",
        link: 'https://github.com/rafaelmerlotto/blog-media'
    },
    {
        title: 'Generate AI voices',
        description: "In this application, I utilized the OpenAI API to convert text into audio. The backend functions as a mechanism that extracts the voice name and text from the request body.\n\
         The frontend comprises a page where users can select their preferred voice, a text field for inputting the text to be transformed into audio, and an audio playback option for listening.",
        img: imgAIVoices,
        imgLink: "https://i.imgur.com/xzXM8Ic.png",
        link: 'https://github.com/rafaelmerlotto/openai_voice_app'
    },
    {
        title: 'Personal Task Management',
        description: "Application for personal management of daily tasks: Provides the ability to create multiple boards and add tasks with difficulty levels,\n\
         start and end times, improve the organization of personal tasks.",
        img: imgTasks,
        imgLink: "https://i.imgur.com/14ojaxd.png",
        link: 'https://github.com/rafaelmerlotto/tasks_management'
        
    },

    {
        title: 'To Do List',
        description: "This is a simple To-Do List web app with basic features. It includes a text field to enter tasks and a button to save them.\n\
         Each task has a delete button for removal. The backend is built using Typescript, Express.js for API creation, and Prisma for database access.\n\
          The frontend is developed in React, with Typescript.",
        img: imgtodo,
        imgLink: "https://i.imgur.com/24txSgW.png",
        link: 'https://github.com/rafaelmerlotto/project-api-todo'
    },

]