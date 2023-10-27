import React from 'react'
import Header from '../../header/Header'
import View from '../../view/View'
import Footer from '../../footer/Footer'
import {javascriptjsData} from './ContentData'
import Container from '../../container/Container'

export default function Javascriptjs() {
  return (
    <>
        <Header/>
        <View/>
        <ContentData/>
        <Footer/>
    </>
  )
}


export const ContentData = () => {
  return (
    <div className='container'>
     {
      javascriptjsData.map(el => (
        <Container container={el} />
      ))
    }
    </div>
  )

}