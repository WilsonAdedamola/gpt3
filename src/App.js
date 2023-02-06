import React from 'react'

import{ Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import{ CTA, Brand, Navbar } from './components'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <div class="programmer">
        <p>Coded by <span class="pname"><a href="https://www.twitter.com/wildam_wildam" target="_blank">wilsonAdedamola</a></span></p>
      </div>
    </div>
  )
}

export default App
