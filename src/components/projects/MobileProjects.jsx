import React from 'react'
import { mobileData } from './MobileData'
import Container from '../Container'
import Header from '../Header'
import Footer from '../Footer'

export default function MobileProjects() {
    return (
        <React.Fragment>
            <Header />
            <MobileData />
       
        </React.Fragment>
    )
}


const MobileData = () => {
    return (
        <div className='container'>
            {
                mobileData.map(el => (
                    <Container container={el} />
                ))
            }
        </div>
    )
}