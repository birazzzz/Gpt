import React from 'react'

import { Brand, Cta, Navbar} from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import './App.css'

const App = () => {
  return (
    <div classname="App">
      <div classname="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App