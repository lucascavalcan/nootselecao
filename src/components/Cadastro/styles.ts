import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    justify-content: space-between;
    margin-top: 100px;
    margin-left: 15px;
    margin-right: 30px;
    font-family: 'Rubik', sans-serif;
    overflow: hidden;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const ImagesLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    .img--left--small {
        margin-top: -70px;
        margin-left: 80px;
    }

    @media (max-width: 1100px) {
        margin-bottom: 30px;
    }

`;

export const ImagesRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    .img--right--small{
        margin-left: 160px;
        margin-bottom: -50px;
        z-index: 9999;
    }

    @media (max-width: 1100px) {
        margin-top: 30px;
    }

`;

export const CadastroArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: -20px;
`;

export const CadastroTitle = styled.div`
    font-size: 45px;
    color: #00DD7D;
    text-align: center;
    line-height: 50px;
    font-family: 'Anton', sans-serif;

`;

export const CadastroDesc = styled.div`
    font-size: 15px;
    color: #76B1BC;
    line-height: 24px;
    font-family: 'Rubik', sans-serif;
    text-align: center;

    height: 90px;
    margin-top: 22px;
`;

export const CadastroButton = styled.button`
    background-color: #50ECE9;
    color: #033434;
    cursor: pointer;
    width: 205px;
    height: 56px;
    padding: 14px 25px 14px 25px;
    border: 0;
    border-radius: 20px;
    font-size: 20px;
    line-height: 28px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.8;
    }
`;
