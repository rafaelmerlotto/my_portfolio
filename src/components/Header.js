import React from "react"
import logo from '../images/logo.png'
import { Link } from "react-router-dom/dist"



export default function Header() {


    return (
            <div className="header">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="nav">
                    <Link className="link" to={'/'}>Home</Link>
                    <Link className="link" to={'/portfolio'}>Portfolio</Link>
                </div>
            </div>
    )
}