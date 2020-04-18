import React, { Component } from 'react'
import {PortfolioSection, PortfolioTitle, VideoW, Span} from './PortofolioStyle'
import ReactPlayer from 'react-player'

 
class Portofolio extends Component{

    playVideo= ()=>{
        this.refs.vidRef.play();
    }

    render(){
        return(
            <PortfolioSection>
            <PortfolioTitle id="2"><Span>Simple</Span> Resume</PortfolioTitle>
            
            <div className= "box">
            <VideoW>
            <ReactPlayer
            url= "https://youtu.be/YLYJgj-xj4Y"
            width= "931px"
            height= "509px"
            controls={true}
            />
</VideoW>
            </div>
           
            
        </PortfolioSection>
        )
    }
   
    
}

export default Portofolio 