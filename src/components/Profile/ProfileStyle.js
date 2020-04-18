import styled from 'styled-components'

export const ProfileSkills= styled.div` 
    padding: 50px 0;
    overflow: hidden;
 `;
 
 export const ProfileSection= styled.div`
    width: 50%;
    float: left;
`;

export const ProfileList= styled.ul`
    list-style: none
`;

export const ProfileItem= styled.li` 
    margin-bottom: px;
   
`;

export const Span= styled.span`
    font-weight: normal;
`;

export const SpanLi= styled.li`
    display: inline-block;
    width: 100px;
    font-weight: bold;
    
`;
export const SpanWeb= styled.span`
    font-weight: normal;
    color: #eb5424
`;
export const Skills= styled.div`
    width: 50%;
    float: left;
`;

export const PsTitle= styled.h2`

    font-size: 30px; 
    margin-bottom: 20px;
    font-family: 'ZCOOL XiaoWei', serif;
`;
export const SkillsDes= styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`;
export const Bar= styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`;

export const BarTitle= styled.span`
    float: left;
    font-family: 'ZCOOL XiaoWei', serif;
`;

export const BarPer= styled.span`
    float: right;
    margin-right: 100px
`;

export const BarParent= styled.div`
    height: 2px;
    clear: both;
    position: relative;
    top: 5px;
    background: gray;
    font-family: 'Josefin Slab', serif;
`;

export const BarSpan= styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width: ${props=>props.wd===1?"80%": props.wd===2? "100%": props.wd===3? "70%":"0"};


`;
export const BarSpan2= styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width: 90%

`;
