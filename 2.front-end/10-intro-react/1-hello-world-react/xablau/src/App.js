import './App.css'
import React, { Component } from 'react'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}
