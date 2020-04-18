import styled from 'styled-components'

export const DropSection= styled.div` 
    padding: 50px 0;
    text-align: center
`;

export const DropTitle= styled.h2` 
    font-size: 60px;
    margin-bottom: 30px
`;

export const SpanTitle= styled.span`
    font-weight: normal
`;

export const Form= styled.form` 
    width: 70%;
    margin: auto;
`;

export const FormInput= styled.div` 
    overflow: hidden;
    margin-bottom: 10px
`;
export const Input= styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`;

export const InputText= styled(Input)`
    float: left;
    width: 49%;
    margin-right: 10px
`;

export const InputEmail= styled(Input)`
    float: right;
    width: 49%;
`;

export const Inputsub= styled.input`
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
`;

export const Textarea= styled.textarea`
    width: 100%;
    outline: 0;
    background: #e6e6e6;
    resize: none
`;

export const InputSubmit= styled.input`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
    padding: 5px;
    &:hover{
        background: #d9d9d9;
        color: black
    };
    margin-bottom: 50px;
    
`;
export const divLogo= styled.img`
    margin-top: 20px;

`;