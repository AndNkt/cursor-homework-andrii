import styled from 'styled-components';

export const IMG = styled.div`
border-radius: 50%;
    display: block;
    height: 25px;
    width: 25px;
    background: magenta;
    padding: 5px;
    margin: 0 auto;
    margin-top: 20px;
`;

export const BODYTEXT = styled.h2`
    color: #fff;
    width:12%;
    min-width:10%;
    max-width:15%;
    margin-left:auto;
    margin-right:auto
`;

export const InputName = styled.input`
    background: rgb(43, 41, 41);
    border: ${props => props.border ? '1px solid green': props.empty ? '1px solid #6a6a6a' :'1px solid red'};
    border-radius:5px;
    padding: 10px 10px 10px 10px;
    width:115px;
    margin-bottom: 20px;
    color: #fff;
`;

export const Input = styled.input`
    background: rgb(43, 41, 41);
    border: ${props => props.border ? '1px solid green': (props.empty ? '1px solid #6a6a6a' :'1px solid red')};
    border-radius:3px;
    padding: 10px 10px 10px 10px;
    width:80%;
    margin-bottom: 20px;
    color: #fff;
    display:block;
    max-width:250px;
    margin-left:auto;
    margin-right:auto
`;

export const CheckFragment = styled.div`
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-bottom: 20px;
    margin-left: auto;
    width:27%;
    max-width: 30%;

    & > p{
        color: whitesmoke;
        margin: 0;
        font-size: 12px;
        margin-top: 10px;
        width: 70%;
        max-width: 85%;
        display:block
        
    }
`;

export const CheckBox = styled.input`
    margin-top: 15px;
`;



export const Button = styled.button`
    padding: 10px 5px 10px 5px;
    width: 20vw;
    border: none;
    border-radius:7px;
    margin-left:auto;
    margin-right:auto;
    background: cyan;
    margin-bottom: 5px;
    display:block;
    max-width:150px;
`;

export const FooterInfo = styled.span`
    display: block;
    margin-top: 30px;
    margin-left:auto;
    margin-right:auto;
    font-size:13px;
    max-width:200px;
    color: rgb(199, 194, 194);
`;

export const Photo = styled.img`
    height: 35px;
    width: 35px;
`;


export const PreFooter = styled.span`
    display: block;
    margin-left:auto;
    margin-right:auto;
    max-width:275px;
`;