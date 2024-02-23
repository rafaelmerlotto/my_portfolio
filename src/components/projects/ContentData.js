import imgtodo from '../images/img/todopic.png'
import imgWeatherapp from '../images/img/weather_app.png'
import imgtrackerFinance from '../images/img/app-tracker-responsive.png'
import imgBlogMedia from '../images/img/blog-media.png'
import imgBrew from '../images/img/brew.png'

export const projectsData = [
    {
        title: 'Tracker finance',
        description: "This application was developed with the aim of personal finance management. It gives the user the ability to save or delete income,\n\
         expenses, and savings with real-time updates. Additionally, there is a functionality that allows the user to switch between five different currencies.",
        img: imgtrackerFinance,
        imgLink: "https://camo.githubusercontent.com/d15048c30c08918201343dd93effede19aeb0a4112dd887af69557f99c17a056/68747470733a2f2f692e696d6775722e636f6d2f4a503857634e592e706e67",
        link: 'https://github.com/rafaelmerlotto/tracker-finance',
    }, 
     {
        title: 'Project Blog',
        description: "This blog was developed with the intention of empowering users to share their thoughts freely. The homepage features fields for creating posts,\n\
         including the title and body. Beneath, there is a list of the user's posts for easy management. The Timeline page showcases all posts published by users, \n\
         offering the opportunity to comment on any post of interest. The My Account section provides profile management options, allowing users to modify personal data, \n\
         change passwords, and delete accounts if needed.",
        img: imgBlogMedia, 
        imgLink: "https://camo.githubusercontent.com/d539799175a28b3ca9502e852de45ea72abbe44eecfcc4566143e9c52d7ded94/68747470733a2f2f692e696d6775722e636f6d2f7479397a776a682e706e67",
        link: 'https://github.com/rafaelmerlotto/blog-media'
    },
    {
        title: 'To Do List',
        description: "This is a simple To-Do List web app with basic features. It includes a text field to enter tasks and a button to save them.\n\
         Each task has a delete button for removal. The backend is built using Typescript, Express.js for API creation, and Prisma for database access.\n\
          The frontend is developed in React, with Typescript.",
        img: imgtodo,
        link: 'https://github.com/rafaelmerlotto/project-api-todo'
    },
    {
        title: 'Project App Brew',
        description: "This project manages a home brewing application. The application is composed of two parts: backend and frontend,\n\
         both of which are independent. The application is responsive, adapting to all devices based on their width. The frontend was developed in Angular.",
        img: imgBrew,
        link: 'https://github.com/antoniotassone94/project_app_brew'
    },
    // {
    //     title: 'Weather app',
    //     description: "Web app sviluppata in React, con un campo per inserire il nome di una città, e un bottone per dare start alla ricerca.\n\
    //     Ho utilizzato OpenWeather API per Ottenere i risultati del meteo e per il design e i componenti la libreria MaterialUI.",
    //     img: imgWeatherapp,
    //     link: 'https://github.com/rafaelmerlotto/weather-app'
    // },
  
]