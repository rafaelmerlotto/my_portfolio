import React, { useState } from 'react'
import { useTheme } from "../context/themeProvider";


export default function Content() {
    const { toggleTheme, darkMode } = useTheme();
  
    return (
        <div  className={`content `}>
            <div className='title'>
                <h4>Full Stack Web Developer</h4> <br />
                <p>Node.js | React | JavaScript | typeScript | Ruby on Rails</p>
                <hr />
            </div>
        </div>
    )
}
