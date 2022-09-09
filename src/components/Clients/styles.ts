import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100px;
    overflow: hidden;
`;

export const Square = styled.div`
    background-color: #E4F0F2;
    width: 853px;
    height: 517px;
    border-top-right-radius: 130px;
    border-bottom-left-radius: 130px;
    border-bottom-right-radius: 130px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;

    @media (max-width: 890px) {
        flex-direction: column;
        width: 500px;
        border-radius: 100px;
        height: auto;
    }

    @media (max-width: 500px) {
        width: 450px;
    }

`;

export const SquareLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SquareTitle = styled.div`
    color: #033434;
    font-size: 48px;
    line-height: 56px;
    font-family: 'Anton', sans-serif;
    width: 280px;
    align: left;

    @media (max-width: 890px) {
        margin-top: 50px;
        text-align: center;
    }

`;

export const SquareDesc = styled.div`
    color: #457F7E;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Rubik', sans-serif;
    width: 280px;
    align: left;
    margin-top: 20px;

    @media (max-width: 890px) {
        text-align: center;
    }
`;

export const SquareRight = styled.div`
    flex: 1;
    display:grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 890px) {
        grid-template-columns: repeat(1, 1fr);
    }
    
`;

export const SquareLogo = styled.div`
    width: 140px;
    height: 90px;
    background-color: #DDE8EA;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;

    @media (max-width: 890px) {
        margin-left: 150px;
        margin-bottom: 10px;
        width: 200px;
        height: 120px;
    }

    @media (max-width: 500px) {
        margin-left: 120px;
    }
`;