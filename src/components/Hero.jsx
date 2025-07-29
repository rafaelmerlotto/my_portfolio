import React, { useState, useEffect } from 'react'
import About from './About';
import Info from './Info';


export default function Hero() {

    return (
        <React.Fragment>
            <section id="home" className="pt-24 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <About />
                        <Info />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
