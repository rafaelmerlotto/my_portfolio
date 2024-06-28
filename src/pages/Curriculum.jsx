import React from 'react'
import pdfCv from '../assets/pdf/RafaelMerlotto.pdf'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


export default function Curriculum() {
  return (
    <div className='cv'>
        <embed src={pdfCv} width={"100%"} height={"100%"} />
    </div>
  )
}
