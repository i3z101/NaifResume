import styled from 'styled-components'

export const SocialMediaSection= styled.div` 
    height: auto;
    overflow: hidden
`;

export const SocialM= styled.div` 
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props=>props.item===1? "#3b5998": props.item===2? "#498cbf" : props.item===3? "#C13584":""};
    @media (max-width:991px) {
            width: 100%;
            float: none;
    }
    
`;


export const Icon= styled.i` 
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 23px;
`;

export const  SocialP= styled.p` 
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float: left;
`;

export const Info1= styled.span` 
    display: block;
    margin-bottom: 8px;
    font-family: 'Roboto Mono', monospace;
`;

export const Info2= styled.span` 
    font-weight: normal;
    font-family: 'Kalam', cursive;
`;

