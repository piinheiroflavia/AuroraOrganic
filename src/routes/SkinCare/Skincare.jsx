//const { default: Header } = require("../../components/Header/Header")
import { Fragment, useState } from 'react'
import Footer from "../../components/Footer/Footer";
import FormNewsLetter from "../../components/FormNewsLetter/FormNewsLetter";
import Header from "../../components/Header/Header";
import CardVenda from "../../components/CardVendaSkin/CardVendaSkin";
//import Card from '../../components/CardVendaSkin/CardVendaSkin';


const Skincare = () => {


    return (  
      <>
        <Header/>
        <blockquote className="text-3xl font-semibold italic text-center text-gray-900 sm:text-4xl">
        
          <span className="mt-24 mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-aurora-fundoEscuro relative inline-block">
            <span className="mx-1 relative text-white"> Produtos de Skincares  </span>
          </span>         
        </blockquote>
        <CardVenda/>
        <CardVenda/>
        <br className="mb-40"></br>
        
        <FormNewsLetter/>   
        <Footer/>

      </>
    )
} 

export default Skincare;