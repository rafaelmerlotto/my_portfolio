import React from 'react'
import "../assets/css/cv.css"
import picProfile from "../assets/images/Rafael-Merlotto.jpg"

export default function CvPT() {
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
                                <p>Brasileira, Italiana</p><br />
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
                            <p>Sou um desenvolvedor web full stack apaixonado e motivado em criar aplicações front-end e back-end e soluções web inovadoras e user-friendly. <br/>
                              <br/> Estou em constante formação e sempre em busca de novas oportunidades para expandir minhas habilidades e conhecimentos.<br/> 
                               <br/>  Considero-me uma pessoa organizada e capaz de trabalhar em equipe. Encaro novos assuntos de estudo com forte motivação e compromisso constante.</p>

                        </div>
                    </div>
                </div>

              

                <div className='main'>
  {/* ///////////////////////////// */}
                <div className='contain-1'>
                    <div className='box'>
                        <h6>Experiência profissional <hr /></h6>
                        <div className='content'>
                            <span>Full Stack Developer Freelance</span>
                            <p>Node.js | React</p>
                            <p>01/2024 - atual</p>
                        </div>
                    </div>

                    <div className='box'>
                        <h6>Formação  <hr /></h6>
                        <div className='content'>
                            <span>Full Stack Developer Node.js</span>
                            <p>Laberba.io</p>
                            <p>05/2023 - 11/2023</p>
                        </div>
                        <div className='content'>
                            <span>Curso Web Developer</span>
                            <p>PC Academy</p>
                            <p>08/2022 - 01/2023</p>
                        </div>
                        <div className='content'>
                            <span >PHP Developer Fundamentals on MySQL® Environment. </span>
                            <p>TESI Automazione S.r.l</p>
                            <p>01/2023</p>
                        </div>
                        <div className='content'>
                            <span>3° Ano - Ensino Medio</span>
                            <p>Escola Estadual Waldemar Ferreira</p>
                            <p>01/2005 - 12/2011</p>
                        </div>
                    </div>

                    <div className='box'>
                        <h6>Competências linguísticas <hr /></h6>
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
                                <span>Português</span>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr>
                                <span>Inglês</span>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr>
                                <span>Espanhol</span>
                                <td>●</td>
                                <td>●</td>
                                <td>●</td>
                            </tr>
                            <tr>
                                <span>Esloveno</span>
                                <td>●</td>
                            </tr>
                        </table>
                    </div>
                </div>

                    {/* ///////////////////////////// */}
                    <div className='contain'>
                        <div className='box'>
                            <h6>Competências <hr /></h6>
                            <div className='content'>
                                <ul>
                                    <li>
                                       <p>Linguagens de programação: <span>HTML, CSS, JavaScript, Typescript</span></p> 
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
                                       <p>Ferramentas de controle: <span>Git, GitHub</span></p> 
                                    </li>
                                    <li>
                                       <p>Design responsive e UI/UX: <span>TailwindCSS, MaterialUI</span></p> 
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='box'>
                            <h6>Interesses   <hr /></h6>
                            <div className='content-i'>
                                <p>Apaixonado por tecnologia, leio e assisto às notícias para me manter atualizado sobre as últimas 
                                    tendências no mundo do desenvolvimento web.<br/>  Também adoro experimentar outras linguagens de programação
                                     para expandir minhas habilidades e aprofundar minha compreensão dos princípios de programação,
                                     além de compartilhar meus conhecimentos com os outros..</p>
                               
                            </div>
                        </div>
                        <div className='box'>
                            <h6>Projetos <hr /></h6>
                            <div className='content-i'>
                             <a href="http://github.com/rafaelmerlotto">github.com/rafaelmerlotto</a> <br />
                             {/* <a href="http://github.com/rafaelmerlotto">Portfolio</a>  */}
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}
