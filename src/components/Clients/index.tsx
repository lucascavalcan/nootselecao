import * as C from "./styles";
import OutPlay from "../../images/clinet-outplay.png";
import Enxada from "../../images/client-enxada.png";
import Alla from "../../images/client-alla.png";
import NeepHost from "../../images/client-neephost.png";
import GamersClub from "../../images/client-gamersclub.png";
import Fx from "../../images/client-fx.png";


export const Clients = () => {
    return (
        <C.Container>
            <C.Square>
                <C.SquareLeft>
                    <C.SquareTitle>ATÉ LOREM{<br/>}IPSUM,{<br/>}CONFIA.</C.SquareTitle>
                    <C.SquareDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</C.SquareDesc>
                </C.SquareLeft>

                <C.SquareRight>
                    <C.SquareLogo><img src={OutPlay} width="90" alt=""/></C.SquareLogo>
                    <C.SquareLogo><img src={Enxada} width="70" alt=""/></C.SquareLogo>
                    <C.SquareLogo><img src={Alla} width="50" alt=""/></C.SquareLogo>
                    <C.SquareLogo><img src={NeepHost} width="70" alt=""/></C.SquareLogo>
                    <C.SquareLogo><img src={GamersClub} width="90" alt=""/></C.SquareLogo>
                    <C.SquareLogo><img src={Fx} width="60" alt=""/></C.SquareLogo>
                </C.SquareRight>

            </C.Square>
        </C.Container>
    )
}