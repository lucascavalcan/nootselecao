import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #00DD7D
`;

export const Title = styled.div`
    color: #00DD7D;
    font-size: 50px;
    line-height: 60px;
    font-family: 'Anton', sans-serif;
    text-align: center;
`;

export const Desc = styled.div`
    color: #76B1BC;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Rubik', sans-serif;
    text-align: center;
    width: 540px;
    margin-top: 20px;

    @media (max-width: 700px) {
        width: 500px;
    }
`;

export const FunctionsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;

    @media (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Functions = styled.div`
    width: 300px;
    height: 150px;
    border: 1px solid #00DC7D;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

export const FunctionsSymbol = styled.div`
    width: 60px;
    .logo {
        font-size: 3em;
        margin-left: -20px;
    }
`;

export const FunctionsDesc = styled.div`
    color: #E4F0F2;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Rubik', sans-serif;
`;

export const Image = styled.div`
    margin-left: -900px;
    margin-top: -50px;
    margin-bottom: -20px;
    .img {
        transform: scaleX(-1);
    }
`;