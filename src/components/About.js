import React from 'react'
import picture from '../images/Rafael-Merlotto.jpg'


export default function About() {
    return (
        <div className='about'>
            <div className='picture'>
                <img src={picture} height={300} />
            </div>
            <div className='description'>
                <h3>About</h3>
                <p>Sono uno sviluppatore web full stack Jr appassionato e motivato nel creare applicazioni front-end e back-end.
                    Sono in continua formazione e costantemente alla ricerca di nuove opportunità per espandere le mie
                    competenze e conoscenze.
                    Sviluppo principalmente in HTML5, CSS, JavaScript, React ,typeScript, Node.js.
                    Ho familiarità con lo sviluppo in PHP on MySQL e WordPress.
                    Mi ritengo una persona organizzata e in grado di lavorare in team. Affronto nuove materie di studio con forte
                    motivazione e impegno costante.</p>
            </div>
        </div>
    )
}
