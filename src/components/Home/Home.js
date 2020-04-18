import React from 'react'
import {HomeSection,HomeTitle, HomeInformation, HomeInfo, HomeDesc, Span, HomeBtn} from './Home.Style'

const Home = () => {
    const start=()=>{
        window.scrollTo(0,620);
    }
    return(
       <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Naif Basaleeb</HomeTitle>
                    <HomeInfo>SOFTWARE ENGINEER</HomeInfo>
                    <HomeDesc>
                        I am a software engineer and <Span>fullStack developer</Span> in <Span>Android developing</Span>. 
                    </HomeDesc>
                    <HomeBtn onClick={()=>start()}>Let's Begin</HomeBtn>
                    </HomeInformation>
                </div>
               
            </HomeSection>
    )
}

export default Home