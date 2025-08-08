import React from 'react'
import Header from './components/header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home - Next JS",
  description: 'Pegando next',
  //Ao compartilha o link do site, cria um pre visualizacao, titulo, desc, img
  openGraph: {
    title: 'Next JS',
    description: 'Apredendo next js',
    images: ['https://img.png']
  }
}

const Home = () => {
  return (
    <div>
      <Header/>
      <h1 className='p-5'>Pagina Home</h1>
    </div>
  )
}

export default Home
