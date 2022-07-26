import React from 'react'
import  Carousel from '../../components/Carousel/index';
import Header from '../../components/Header/index';
import  Card from '../../components/Card/index';
import Login from '../telaLogin/login';
import Cadastro from '../telaCadastro/cadastro';



function index() {
    return (
      <>
        <Carousel/>
        <h1 style={{color: 'white', textAlign: 'center', fontFamily: 'sans-serif, Arial', fontSize: '4rem'}}> Bem vindo ao nosso site!</h1> 
        <br/>
        <h2 style={{color: 'white', textAlign: 'center', fontFamily: 'sans-serif, Arial'}}> Abaixo você tem algumas opções de sucessos da franquia de star wars, basta clicar em um dos cards abaixo e será redirecionado para poder ler a sinópse e com um trailer da série. </h2>
          
        <Card/>

        
      </>
    )
  }
  
  export default index