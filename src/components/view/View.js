import React from 'react'
import { Link } from 'react-router-dom'
import './view.css'


export default function View() {
    return (
        <>
            <div className='view'>
                <Link to={'/javascript'}> <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' height={70} /></Link>
                <Link to={'/react'}><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' height={70} /></Link>
                <Link to={'/nodejs'}><img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' height={70} /></Link>
            </div>
        </>

    )
}
