import React, { Fragment } from 'react'
import {FooterSection, FooterP,Image,Divw} from './FooterStyle'
import NaifLogo from 'C:/Users/Aziz/Desktop/revision/src/components/Contact/NaifLogo.png'
const Footer = () => {
    return(
        <Fragment>
        <FooterSection>
            
            <FooterP> copyright &copy; 2020 by Aziz </FooterP>
            
            
            <span><Image src= {NaifLogo}/></span>
        </FooterSection>
        </Fragment>
    )
}

export default Footer