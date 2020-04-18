import React, {useState, useEffect} from 'react'
import {ProfileSkills,ProfileSection, Span, ProfileList, PsTitle,ProfileItem, SpanWeb, SkillsDes, Bar, BarTitle, BarPer, BarParent, BarSpan, SpanLi, Skills} from './ProfileStyle.js'
import axios from 'axios'
const Profile = () => {
    const [skills, setSkills]= useState([]);

    useEffect(()=>{
        axios.get("js/data.json").then(res=>{setSkills(res.data.skills)})
    }, [])

    const skills1= skills.map(s=>{
        return(
            <Bar key= {s.id}>
                    <BarTitle>{s.skillname}</BarTitle>
                    <BarPer>{s.precentage}</BarPer>
                    <BarParent>
                        <BarSpan wd={s.id}></BarSpan>
                    </BarParent>
                </Bar>
        )
    })
    return(
        <ProfileSkills>
            <div className="container">
                <ProfileSection>
                    <PsTitle className="profile-title"><Span>My </Span>Profile</PsTitle>
                    <ProfileList>
                        <ProfileItem >
                            <SpanLi>Name</SpanLi>
                            Naif Basaleeb
                        </ProfileItem>
                        <ProfileItem >
                            <SpanLi>Birthday</SpanLi>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem >
                            <SpanLi>Address</SpanLi>
                            Seri Fajar - Gambang - Malaysia
                        </ProfileItem>
                        <ProfileItem >
                            <SpanLi>Phone</SpanLi>
                            +601121200649
                        </ProfileItem>
                        <ProfileItem >
                            <SpanLi>Email</SpanLi>
                            Naif@Naif.com
                        </ProfileItem>
                        <ProfileItem >
                            <SpanLi>Website</SpanLi>
                            <SpanWeb>www.Naif.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <Skills>
                    <PsTitle >Some <Span>skills</Span></PsTitle>
                    <SkillsDes >
                    Here are som skill I could do
                    </SkillsDes>
                    {skills1}
                    
                   
                </Skills>
                
            </div>
        </ProfileSkills>
    )
}

export default Profile