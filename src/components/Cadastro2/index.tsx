import * as C from "./styles";
import LeftBig from "../../images/cad2-big.png";
import RightSmall from "../../images/cad2-small.png";

export const Cadastro2 = () => {

    function openLink() {
        window.open("https://noot.com.br/", "_blank");
    }

    return (
        <C.Container>
            <C.ImageBig>
                <img src={LeftBig} alt="" width="500px"/>
            </C.ImageBig>

            <C.CenterArea>
                <C.Title>TUDO É FEITO{<br/>}EM LOREM IPSUM{<br/>}SEM PROBLEMA ALGUM.</C.Title>
                <C.Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</C.Desc>
                <C.CadastroButton onClick={openLink}>CADASTRE-SE</C.CadastroButton>
            </C.CenterArea>

            <C.ImageSmall>
                <img src={RightSmall} alt="" width="220px"/>
            </C.ImageSmall>
        </C.Container>
    )
}