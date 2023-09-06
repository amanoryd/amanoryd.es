import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import './index.css'
import './Breakpoints.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
  </React.StrictMode>,
);