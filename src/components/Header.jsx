import React, { useState } from "react"
import logo from '../assets/images/logo-.png'
import { Link } from "react-router-dom/dist"
import '../assets/css/header.css'



export default function Header() {



    return (
        <div className="header">
            <div className="logo">
                <Link to={"/"}>
                    <img src={logo} height={40} />
                </Link>
            </div>
            <div className="nav">
                <Link className="link" to={'/'}>Home</Link>
                <Link className="link" to={'/portfolio'}>Portfolio</Link>
                <Link className="link" to={'/cv'}>CV</Link>
            </div>
        </div>
    )
}