import styled from "styled-components";

export const Container = styled.div`
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
    font-family: 'Rubik', sans-serif;

    @media (max-width: 580px) {
        flex-direction: column;
   
    }
`;

export const Logo = styled.div`
    color: #00DD7D;
    font-size: 52px;
    cursor: pointer;
`;

export const Menu = styled.div`
    font-size: 20px;
    display: flex;


    ul {
        display: flex;
        flex-direction: row; 
        list-style: none;
        align-items: center;
        justify-content: center;

        a {
            text-decoration: none;
            color: #E4F0F2;
            font-size: 20px;
            margin-left: 44px;
            transition: all 0.5s ease;

            &:hover {
                color: #00DD7D;
            }
        }

    };

    @media (max-width: 1120px) {
        display: none;
    }
`;

export const Button = styled.button`
    background-color: #50ECE9;
    color: #033434;
    cursor: pointer;
    width: 328px;
    height: 57px;
    padding: 14px 19px 14px 19px;
    border: 0;
    border-radius: 20px;
    font-size: 20px;
    line-height: 28px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 620px) {

    }
`;

export const MenuMobile = styled.div`
    display: none;

    div {
        height: 10px;
        width: 70px;
        background-color: #E4F0F2;
        border-radius: 10px;
        margin-top: 10px;
    }

    @media (max-width: 1120px) {
        display: block;
    }
`;

export const MenuMobileLinks = styled.div`
    display: none;
    background-color: #50ECE9;
    transition: all 0.5s ease;

    @media (max-width: 1120px) {
        display: flex;
        flex-direction: column;
        font-family: 'Rubik', sans-serif;
        transition: all 0.5s ease;
        
        ul {
            display: flex;
            flex-direction: column; 
            list-style: none;
            align-items: flex-end;
            margin-right: 30px;
            justify-content: center;
    
            li {
                margin-top: 15px;
            }

            a {
                text-decoration: none;
                color: #033434;
                font-size: 25px;
                margin-left: 44px;

                &:hover {
                    background-color: #033434;
                    color: #50ECE9;
                }
            }
        };
    }   
    
    @media (max-width: 580px) {
        margin-top: 70px;
   
    }
`;