import * as C from "./styles";
import { useState } from "react";
import {Link} from "react-router-dom";

export const Header = () => {


    const [showMenu, setShowMenu] = useState<boolean>(false)

    function openToggle() {
        if (showMenu === false) {
            setShowMenu(true)
        } else setShowMenu(false)
    }

    function openLink() {
        window.open("https://www.noot.com.br/;", "_blank");
    }

    return (

        <>
            <C.Container>
            <C.Logo>noøt</C.Logo>

                <C.Menu>
                    <ul>
                      <li><a href="#Home">HOME</a></li>
                      <li><a href="#Sobre">SOBRE</a></li>
                      <li><a href="#Funcionalidades">FUNCIONALIDADES</a></li>
                      <li><a href="#Clientes">CLIENTES</a></li>
                     </ul>
                 </C.Menu>


            <C.Button onClick={openLink}>
                ESTOU SOBRE LOREM IPSUM
            </C.Button>

            <C.MenuMobile onClick={openToggle}>
                <div></div>
                <div></div>
                <div></div>
            </C.MenuMobile>

        </C.Container>

        {showMenu ?  
            <C.MenuMobileLinks>
                <ul>
                    <li><a href="#Home">HOME</a></li>
                    <li><a href="#Sobre">SOBRE</a></li>
                    <li><a href="#Funcionalidades">FUNCIONALIDADES</a></li>
                    <li><a href="#Clientes">CLIENTES</a></li>
                </ul>
             </C.MenuMobileLinks>
        : null}
        </>
        
    )
}