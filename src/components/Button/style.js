import styled from 'styled-components';

export const ButtonContainer=styled.button`

    padding:30px;
    background-color:#333333;
    font-size:1.6rem;
    font-weight:bolder;
    color:white;
    cursor:pointer;
    flex:1;
    border-radius:50%;
    margin-bottom:5px;
    transition:opacity 0.5s ease;
    &:hover{
        opacity:0.7;
    }
    &:focus{
        outline:none;
    }
`
export const ButtonUp=styled.button`

    padding:30px;
    background-color:#FE9505;
    font-size:1.6rem;
    font-weight:bolder;
    color:white;
    cursor:pointer;
    flex:1;
    border-radius:50%;
    margin-bottom:5px;
    &:hover{
        opacity:0.6;
    }
    &:focus{
        outline:none;
    }
`