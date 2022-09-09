import * as C from "./styles";
import LeftBig from "../../images/leftbig.png";
import LeftSmall from "../../images/leftsmall.png";
import RightBig from "../../images/rightbig.png";
import RightSmall from "../../images/rightsmall.png";

export const Cadastro = () => {

    function openLink() {
        window.open("https://www.noot.com.br/;", "_blank");
    }

    return (
        <C.Container>
            <C.ImagesLeft>
                <img src={LeftBig} width="394" alt="" className="img--left--big"/>
                <img src={LeftSmall} width="238" alt="" className="img--left--small"/>

            </C.ImagesLeft>

            <C.CadastroArea>
                <C.CadastroTitle>LOREM IPSUM E MAIS QUE {<br/>} UM TEXTO SALVA VIDAS.</C.CadastroTitle>
                <C.CadastroDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{<br/>}eiusmod tempor incididunt ut labore et dolore magna aliqua.</C.CadastroDesc>
                <C.CadastroButton onClick={openLink}>CADASTRAR-SE</C.CadastroButton>
            </C.CadastroArea>

            <C.ImagesRight>
                <img src={RightSmall} width="84" alt="" className="img--right--small"/>
                <img src={RightBig} width="403" alt="" className="img--right--big"/>
            </C.ImagesRight>
        </C.Container>
    )
}