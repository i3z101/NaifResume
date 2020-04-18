import React, {useState, useEffect} from 'react'
import {SocialMediaSection, SocialM, Icon, SocialP, Info1, Info2} from './SocialStyle.js'
import axios from 'axios'



const Social = () => {
    
const [socialInfo, setSocials]= useState([]);

useEffect(()=>{
    axios.get("js/data.json").then(res=>{ setSocials(res.data.social) })
    
}, [])
    const socialn= socialInfo.map(soc=>{
        return(
            <SocialM key= {soc.id} item= {soc.id}>
            <Icon className= {soc.icon}></Icon>
                <SocialP>
                    <Info1>{soc.title}</Info1>
                    <Info2>{soc.body}</Info2>
                </SocialP>
            </SocialM>
    )})
 
    return( 
        <SocialMediaSection>
            
          {socialn}  
            
          
        </SocialMediaSection>
    )
}

export default Social