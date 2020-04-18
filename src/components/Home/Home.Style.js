import styled from 'styled-components'

export const HomeSection= styled.div` 
    height: 500px;
    background: url('images/Home/homebg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    background-position-y: bottom;
`;

export const HomeInformation= styled.div` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media (max-width:768px) {
        .home .home-information .home-title {
            font-size: 20px;
            
        }
`;

export const HomeTitle= styled.h2` 
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    font-family: 'ZCOOL XiaoWei', serif; 
    @media (max-width:768px) {
            font-size: 40px;
            color: #fff
        };
        @media (max-width:575px) {
            font-size: 30px
        }

`;

export const HomeInfo= styled.h4` 
    font-size: 35px;
    color: #ff5050;
    margin-bottom: 20px;
    font-family: 'Kanit', sans-serif;
`;

export const HomeDesc= styled.p`
    font-size: 26px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
    font-family: 'Josefin Slab', serif;
    @media (max-width:768px) {
        .home .home-information .home-title {
            font-size: 15px;
            
        }
`;

export const Span= styled.span`
    color: #000;
    font-weight: bolder
`;

export const HomeBtn= styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Indie Flower', cursive;

    &:hover{
        background: #fff;
        color: #eb5424;
    };

    &:active{
        outline: none
    }
`;
