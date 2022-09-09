import * as C from "./styles";
import ImageTop from "../../images/top-image.png";
import ImageBottom from "../../images/bottom-image.png";
import ImageFinal from "../../images/footer-image.png";

export const Sobre = () => {
    
    function openLink() {
        window.open("https://www.noot.com.br/;", "_blank");
    }
    
    return (
        <C.Container>
            <C.Top>
                <C.TextArea>
                    <C.Title>SOMOS UMA EXTENSÃO{<br/>}EM LOREM IPSUM.</C.Title>
                    <C.Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.</C.Desc>
                </C.TextArea>
                <C.ImageTop><img src={ImageTop} alt="" width="400px"/></C.ImageTop>
            </C.Top>

            <C.Bottom>
                <C.ImageBottom><img src={ImageBottom} alt="" width="400px"/></C.ImageBottom>
                <C.TextArea>
                    <C.Title>Precisa de um LOREM IPSUM?</C.Title>
                    <C.Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </C.Desc>
                    <C.Button onClick={openLink}> ENTRAR EM CONTATO</C.Button>
                </C.TextArea>
            </C.Bottom>

            <C.Final>
                <C.FinalLeft>
                    <C.FinalTitle><p>A CAMADA{<br/>}DE PROTEÇÃO{<br/>}EM LOREM{<br/>}IPSUM.</p></C.FinalTitle>
                </C.FinalLeft>

                <C.FinalRight>
                    <C.FinalText>001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110001 10001 101 1001 000 10001 01110001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 001 00010001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 01110 00001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 10001 00 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 000 00 10001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 00
                        00001 0001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 00 000010  101201 00001 0001 01110 001 10001 101 1001 000 10001 00001 0001 01110 001 10001 101 1001 000 10001 01110 001 10001 101 1001 00 000010 001 10001 101 1001 000 10001 01110 001 10001 101 1001 00 000010  101201 01110 001 10001 101 1001 00 000010  101201
                    </C.FinalText>
                </C.FinalRight>

            </C.Final>
            <C.FinalButton onClick={openLink}>ESTOU SOBRE LOREM IPSUM</C.FinalButton>
            <C.FinalImage><img src={ImageFinal} alt="" width="600px"/></C.FinalImage>
        </C.Container>
    )
}