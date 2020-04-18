import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Index from './components/Index/Index'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
 
  scroll=()=>{
    window.scrollTo(0,0)
  }

 
  

  render(){
    return(
      
        <BrowserRouter>
        <Navbar/>
        <Route exact path= "/" component={Index}/>
        <Route path= "/contact" component= {Contact}/>

        <button onClick={this.scroll} id="but" onScroll={this.scrollY} className="button"><i class="fas fa-arrow-up fa-lg"></i></button>
        </BrowserRouter>
      
      
    )
    
  }
  
}

export default App;
