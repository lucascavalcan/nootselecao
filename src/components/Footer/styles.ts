import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1e1e1e;
    height: 330px;
    width: 100%;
    overflow: hidden;
    margin-top: -170px;
`;

export const FooterText = styled.div`
    width: 1200px;
    border-top: 1px solid #00DD7D;
    color: #325959;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    line-height: 70px;
    paddin: 20px;
    margin-top: 250px;
    margin-left: 50px;

    @media (max-width: 1030px) {
        text-align: center;
    }
`;



