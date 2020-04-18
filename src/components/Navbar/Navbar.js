import React from 'react'
import {Link} from 'react-router-dom'
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor,LinkA, Naif} from './NavbarStyle';
import naifLogo from './image/NaifLogo.png'


const Navbar = () => {
    return(
      
        <NavbarSection>
            
        <div className="container">
            
            <Logo>
                <LogoText><Naif src= {naifLogo}/></LogoText>
            </Logo>
            <UlList>
                <ListItem><LinkA to="/">Home</LinkA></ListItem>
                <ListItem><Anchor href="#1">Work</Anchor></ListItem>
                <ListItem><Anchor href="#2">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#4">About</Anchor></ListItem>
                <ListItem><LinkA to="/contact">Contact</LinkA></ListItem>
            </UlList>
            
        </div>
        
    </NavbarSection>
    )
}

export default Navbar