import React from 'react'
import "../assets/css/cv.css"
import picProfile from "../images/Rafael-Merlotto.jpg"

export default function Cv() {
    return (
        <div className='container-cv'>
            <div className='cv'>
                <div className='info'>
                    <div className='profile'>
                        <img src={picProfile} alt="" height={120} />
                        <h5>Rafael Merlotto</h5>
                        <div className="description">
                            <div className='row'>
                                <p>13/07/1994</p><br />
                            </div>
                            <div className='row'>
                                <p>Italiana, Brasiliana</p><br />
                            </div>
                            <div className='row'>
                                <p>5270 Ajdovščina (Slovenia)</p><br />
                            </div><br />
                            <div className='row'>
                                <p>rafaelmerlotto@gmail.com</p><br />
                            </div>
                            <div className='row'>
                                <p>+39 3511099867</p><br />
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <div className='symbol'>
                            <h4>CV</h4>
                        </div>
                        <div className='presentation'>
                            <p>Sono uno sviluppatore web full stack appassionato e motivato nel creare applicazioni front-end e back-end e soluzioni web innovative e user-friendly.
                                <br /> Sono in continua formazione e costantemente alla ricerca di nuove opportunità per espandere le mie
                                competenze e conoscenze. <br /> Mi ritengo una persona organizzata e in grado di lavorare in team. Affronto nuove materie di studio con forte
                                motivazione e impegno costante.</p>

                        </div>
                    </div>
                </div>

              

                <div className='main'>
  {/* ///////////////////////////// */}
                <div className='contain-1'>
                    <div className='box'>
                        <h6>Esperienza lavorativa <hr /></h6>
                        <div className='content'>
                            <span>Full Stack Developer Freelance</span>
                            <p>Node.js | React</p>
                            <p>01/2024 - attuale</p>
                        </div>
                    </div>

                    <div className='box'>
                        <h6>Formazione   <hr /></h6>
                        <div className='content'>
                            <span>Full Stack Developer Node.js</span>
                            <p>Laberba.io</p>
                            <p>05/2023 - 11/2023</p>
                        </div>
                        <div className='content'>
                            <span>Corso Web Developer</span>
                            <p>PC Academy</p>
                            <p>08/2022 - 01/2023</p>
                        </div>
                        <div className='content'>
                            <span>PHP Developer Fundamentals on MySQL® Environment. </span>
                            <p>TESI Automazione S.r.l</p>
                            <p>01/2023</p>
                        </div>
                        <div className='content'>
                            <span>Diploma di Scuola Secondaria Superiore</span>
                            <p>Escola Estadual Waldemar Ferreira</p>
                            <p>01/2005 - 12/2011</p>
                        </div>
                    </div>

                    <div className='box'>
                        <h6>Competenze linguistiche <hr /></h6>
                        <table>
                            <tr>
                                <th></th>
                                <th>A1</th>
                                <th>A2</th>
                                <th>B1</th>
                                <th>B2</th>
                                <th>C1</th>
                                <th>C2</th>
                            </tr>
                            <tr>
                                <span>Italiano</span>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr>
                                <span>Portoghese</span>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr>
                                <span>Inglese</span>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr>
                                <span>Spagnolo</span>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr>
                                <span>Sloveno</span>
                                <td>●</td>
                            </tr>
                        </table>
                    </div>
                </div>

                    {/* ///////////////////////////// */}
                    <div className='contain'>
                        <div className='box'>
                            <h6>Competenze <hr /></h6>
                            <div className='content'>
                                <ul>
                                    <li>
                                       <p>Linguaggi di Programmazione: <span>HTML, CSS, JavaScript, Typescript</span></p> 
                                    </li>
                                    <li>
                                       <p>Framework Front-end: <span>React.js</span></p> 
                                    </li>
                                    <li>
                                       <p>Framework Back-end: <span>Node.js, Express.js</span></p> 
                                    </li>
                                    <li>
                                       <p>Database: <span>MongoDB, MySQL, SQLite</span></p> 
                                    </li>
                                    <li>
                                       <p>Strumenti di Controllo di Versione: : <span>Git, GitHub</span></p> 
                                    </li>
                                    <li>
                                       <p>Design Responsivo e UI/UX: <span>TailwindCSS, MaterialUI</span></p> 
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='box'>
                            <h6>Interessi   <hr /></h6>
                            <div className='content-i'>
                                <p>Appassionato di tecnologia, leggo e guardo le news per rimanere aggiornato sulle ultime tendenze nel mondo dello sviluppo web. <br />
                                    Amo anche sperimentare altri linguaggi di programmazione per allargare le mie competenze e approfondire la comprensione dei principi di programmazione
                                     e condividere le mie conoscenze con gli altri.</p>
                               
                            </div>
                        </div>
                        <div className='box'>
                            <h6>Progetti <hr /></h6>
                            <div className='content-i'>
                             <a href="http://github.com/rafaelmerlotto">https://github.com/rafaelmerlotto</a> <br />
                             {/* <a href="http://github.com/rafaelmerlotto">Portfolio</a>  */}
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}
