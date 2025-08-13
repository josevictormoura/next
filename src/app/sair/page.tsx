'use client'

import React from 'react'
import Header from '../components/header'
import Login from '../components/login'

const Sair = () => {
  return (
    <div>
      <Header/>
      <h1 className='p-5 text-white'>Pagina Login</h1>
      <div>
        <Login/>
      </div>
    </div>
  )
}

export default Sair
