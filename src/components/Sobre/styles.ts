import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 100px;
    margin-left: 15px;
    margin-right: 30px;
    font-family: 'Rubik', sans-serif;
    overflow: hidden;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 800px;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`;

export const ImageTop = styled.div``;

export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 800px;
    margin-left: -20px;
    margin-bottom: 150px;

    @media (max-width: 850px) {
        flex-direction: column;
        margin-top: 50px;
    }
`;

export const ImageBottom = styled.div`
    margin-right: 30px;
    `;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    width: 400px;
`;

export const Title = styled.div`
    font-size: 50px;
    color: #00DD7D;
    align: left;
    line-height: 60px;
    font-family: 'Anton', sans-serif;
    width: 420px;

`;

export const Desc = styled.div`
    font-size: 18px;
    color: #76B1BC;
    line-height: 24px;
    font-family: 'Rubik', sans-serif;
    align: left;
    width: 340px;
    margin-top: 30px;
`;

export const Button = styled.button`
    background-color: #50ECE9;
    color: #033434;
    cursor: pointer;
    width: 235px;
    line-height: 56px;
    padding: 14px 10px 14px 10px;
    border: 0;
    border-radius: 18px;
    font-size: 20px;
    line-height: 28px;
    margin-top: 30px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.8;
    }
`;

export const Final = styled.div`
    width: 1200px;
    height: 330px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 1030px) {
        flex-direction: column;
        height: 500px;
    }
`;

export const FinalLeft = styled.div`
    width: 600px;
    background-color: #00DD7D;
    border-radius: 24px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1030px) {
        flex: 1;
        width: 500px;
        height: 350px;
        border-top-right-radius: 24px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    @media (max-width: 500px) {
        width: 450px;
    }
`;

export const FinalTitle = styled.div`
    color: #033434;
    font-family: 'Anton', sans-serif;
    font-size: 50px;
    line-height: 60px;
    text-align: left;
    width: 600px;
    height: 330px;

    p {
        width: 450px;
        margin-left: 80px;
        text-align: center;
    }
`;

export const FinalText = styled.div`
    color: #00DD7D;
    font-size: 18px;
    font-family: 'VT323', monospace;
    line-height: 24px;
    align: left;
    width: 600px;
    height: 330px;

    @media (max-width: 1030px) {
        display: none;
    }
`;

export const FinalButton = styled.button`
    background-color: #033434;
    color: #50ECE9;
    cursor: pointer;
    width: 250px;
    line-height: 56px;
    padding: 14px 10px 14px 10px;
    border: 0;
    border-radius: 18px;
    font-size: 15px;
    line-height: 28px;
    margin-top: -200px;
    margin-right: -680px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 1030px) {
        margin-bottom: -5px;
        margin-left: -670px;
    }

`;

export const FinalRight = styled.div`
    width: 600px;
    background-color: #fff;
    border-radius: 24px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    @media (max-width: 1030px) {
        flex: 1;
        width: 500px;
        height: 0;
        border-radius: 0;
        background-color: #00DD7D;
    }

    @media (max-width: 500px) {
        width: 450px;
    }
`;

export const FinalImage = styled.div`
    z-index: 999;
    margin-top: -280px;

    @media (max-width: 1030px) {
        display: none;
    }
`;
