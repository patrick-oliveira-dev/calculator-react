import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #474A51;

    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 2%;


    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 90%;
        height: 60px;
        border: 0;
        font-size: 32px;
        font-family: 'Roboto';
        color: #FFFFFF;
        text-align: right;
        padding: 0px 8px;
        background: rgba( 255, 255, 255, 0.35 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        border-radius: 2%;
        
        
    }
`