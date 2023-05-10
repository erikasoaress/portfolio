import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App