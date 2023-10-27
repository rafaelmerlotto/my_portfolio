import imgtodo from '../../images/img/todopic.png'
import imgcrypto from '../../images/img/crypto.png'
import imgPomodoroTimer from '../../images/img/pomodorotimer.png'
import imgQRcode from '../../images/img/qrcode.png'

export const nodejsData = [
    {
        title: 'To Do List',
        description: "Questa è un'app Web To Do List con delle semplice funzioni . \n\
        Un campo di testo per scrivere le tasks e un pulsante per salvarle su ogni task è presente un pulsante per eliminarlo.\n\
        Il backend è stato sviluppato in Node, ho utilizzato Typescript, Express.js per creare le API e Prisma per l'accesso al database.\n\
         Il frontend è stato sviluppato in React, con Typescript.",
        img: imgtodo,
        link: 'https://github.com/rafaelmerlotto/project-api-todo'
    },
    {
        title: 'Pomodoro timer',
        description: "Questo  è un progetto sviluppato in ambiente node con l'Utilizzo di typescript e la compilazione in Javascript\n\
         Un timer alla rovescia, con la possibilità d'impostare i minuti desiderati non superando i 60 minuti.\n\
         Per in design ho utilizzato le classi di Bootstrap e CSS'",
        img: imgPomodoroTimer,
        link: 'https://github.com/rafaelmerlotto/pomodoro-timer'
    },
    {
        title: 'Crypto web app',
        description: "Questa è una web app sviluppata in ambiente node ultilizzando typescript.\n\
        Prende la lista delle criptovalute con le informazioni ottenute da API CoinGecko",
        img: imgcrypto ,
        link: 'https://github.com/rafaelmerlotto/cryptovalute-app'
    },
    {
        title: 'QRcode generate',
        description: "Questa è una web app generate QRcode, um campo per il testo e un bottone per generare.\n\
        ho ultilizzato typescript, e per le dependencies qrcode",
        img: imgQRcode ,
        link: 'https://github.com/rafaelmerlotto/generate-QRcode'
    },
]