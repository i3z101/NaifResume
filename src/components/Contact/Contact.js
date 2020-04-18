import React from 'react'
import {DropSection, DropTitle, SpanTitle, Form,FormInput,InputText,InputEmail,Inputsub,Textarea,InputSubmit,divLogo} from './ContactStyle.js'
import NaifLogo from './NaifLogo.png'
import Footer from './../Footer/Footer'
const Contact = () => {
    return(
        <DropSection>
            <div className="container">
                <DropTitle><SpanTitle>Send me what do you</SpanTitle>THINK</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <Inputsub type="text"  placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
                <divLogo>
                    <img src= {NaifLogo}/>
                </divLogo>
            </div>

            <Footer>
                
            </Footer>
        </DropSection>
    )
}

export default Contact