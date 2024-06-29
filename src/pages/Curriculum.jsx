import React from 'react'
import { Page, Document, PDFViewer, View, StyleSheet } from '@react-pdf/renderer';
import pdfImg from "../assets/images/RafaelMerlotto_CV.png"
import ReactPDF from '@react-pdf/renderer';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function Curriculum() {
  return (
    <React.Fragment>
      <Header />
      <div id='bkg' className='cv'>

        <img src={pdfImg} className='img' width={"auto"} height={"100%"} />

      </div>
      <Footer/>
    </React.Fragment>

  )
}

