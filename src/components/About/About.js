import React from 'react'
import {CreativeSection, CreativeInfo, InfoTitle, InfoDesc, InfoDir, Span} from './AboutStyle.js'
const About = () => {
    return(
        <CreativeSection id="4">
        <div className="container">
            <CreativeInfo>
                <InfoTitle><Span>This is Me</Span> Naif <Span><i class="far fa-smile-beam fa-2x"></i></Span> </InfoTitle>
                <InfoDir>SOFTWARE ENGINEER</InfoDir>
                <InfoDesc>
                   I'm Naif Basaleeb from Yemen, I'm a software engineer senior from University Malaysia Pahang(UMP)
                </InfoDesc>
                <InfoDesc>
                    MY ASPIRATIONS PUSHED ME TO BE WHERE I AM NOW <i class="fas fa-smile-wink fa-3px"></i>
                </InfoDesc>
            </CreativeInfo>
        </div>
    </CreativeSection>
    )
}

export default About