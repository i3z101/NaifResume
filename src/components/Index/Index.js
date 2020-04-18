import React from 'react'
import Home from '../Home/Home'
import Work from '../Work/Work'
import Portofolio from '../Portofolio/Portofolio'
import Profile from '../Profile/Profile'
import About from '../About/About'
import SocialMedia from '../SocialMedia/SocialMedia'
import Footer from '../Footer/Footer'
const Index = () => {
    return(
        <div>
           <Home/>
           <Work/>
           <Portofolio/>
           <Profile/>
           <About/>
           <SocialMedia/>
           <Footer/>
        </div>
    )
}

export default Index