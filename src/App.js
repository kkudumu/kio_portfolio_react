import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      {/*Navbar Section*/}
      <Navbar/> 
      {/*Header Section*/}
      <Header/>
      {/*Projects Section*/}
      <Projects/>
      {/*About Section*/}
      <About/>
      {/*Contact Section*/}
      <Contact/>
      {/*Footer Section*/}
      <Footer/>
   
    </div>
     

    );
  }
}

export default App;
