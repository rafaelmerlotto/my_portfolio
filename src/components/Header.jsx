import React, { useState } from "react"
import logo from '../assets/images/logo-.png'
import { Link } from "react-router-dom/dist"
import { ToggleRight, ToggleLeft } from 'lucide-react';
import { useTheme } from "../context/themeProvider";
import { CodeXml } from 'lucide-react';
import pdfFile from "../assets/pdf/Rafael_Merlotto__CV.pdf";




export default function Header() {


    const { toggleTheme, darkMode } = useTheme();

    return (
        <div className={`header`}>
            <div className="logo">
                <Link className="link-logo" to={"/"}>
                    <CodeXml size={80} className="img" />
                </Link>
            </div>
            <div className="nav">
                <Link className="link" to={'/'}>Home</Link>
                <Link className="link" to={'/portfolio'}>Portfolio</Link>
                <a className="link" href={pdfFile} target="_blank">CV</a>
                <div className="theme-container">
                    {darkMode ?
                        <ToggleRight size={35} onClick={toggleTheme} className="theme-toggle" /> :
                        <ToggleLeft size={35} onClick={toggleTheme} className="theme-toggle" />
                    }
                </div>
            </div>

        </div>
    )
}