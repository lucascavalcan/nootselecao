import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #00DD7D;
    height: 100vh;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    overflow: hidden;

    @media (max-width: 890px) {
        flex-direction: column;
    }
`;

export const ImageBig = styled.div`


`;

export const CenterArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: -150px;

    @media (max-width: 890px) {
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        align-items: center;
    }
`;


export const Title = styled.div`
    font-size: 50px;
    color: #033434;
    align: left;
    line-height: 60px;
    font-family: 'Anton', sans-serif;
    width: 450px;

    @media (max-width: 890px) {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

`;

export const Desc = styled.div`
    font-size: 18px;
    color: #fff;
    line-height: 24px;
    font-family: 'Rubik', sans-serif;
    align: left;
    width: 340px;
    margin-top: 20px;

    @media (max-width: 890px) {
        text-align: center;
    }
`;

export const CadastroButton = styled.button`
    background-color: #033434;
    color: #50ECE9;
    cursor: pointer;
    width: 205px;
    height: 56px;
    padding: 14px 25px 14px 25px;
    border: 0;
    border-radius: 20px;
    font-size: 20px;
    line-height: 28px;
    margin-top: 50px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 890px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const ImageSmall = styled.div`
    margin-left: -50px;
    margin-right: 60px;

    @media (max-width: 890px) {
        display: none;
    }
`;