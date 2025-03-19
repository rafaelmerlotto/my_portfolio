import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pdfFile from "../assets/pdf/Rafael_Merlotto__CV.pdf"; // Import del PDF

export default function Curriculum() {
  return (
    <React.Fragment>
      <Header />
      <div id="bkg" className="cv">
        <p>Puedes ver mi CV aquí:</p>
        <a href={pdfFile} target="_blank" rel="noopener noreferrer">
          📄 Apri il PDF
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
}