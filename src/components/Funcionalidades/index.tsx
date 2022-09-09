import * as C from "./styles";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BlockIcon from '@mui/icons-material/Block';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import ImageFunction from "../../images/functions-image.png";



export const Funcionalidades = () => {
    return (
        <C.Container>
            <C.Title>PROTEÇÃO PARA ATAQUES{<br/>}DE LOREM IPSUM.</C.Title>
            <C.Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</C.Desc>
            

            <C.FunctionsArea>
                <C.Functions>
                    <C.FunctionsSymbol><TaskAltIcon className="logo"/></C.FunctionsSymbol>
                    <C.FunctionsDesc>Controle tudo{<br/>}pelo nosso{<br/>}lorem ipsum.</C.FunctionsDesc>
                </C.Functions>
                <C.Functions>
                    <C.FunctionsSymbol><RocketLaunchIcon className="logo"/></C.FunctionsSymbol>
                    <C.FunctionsDesc>Configure regras{<br/>}Lorem Ipsum</C.FunctionsDesc>
                </C.Functions>
                <C.Functions>
                    <C.FunctionsSymbol><BlockIcon className="logo"/></C.FunctionsSymbol>
                    <C.FunctionsDesc>Bloqueie portas{<br/>}não utilizadas em{<br/>}lorem ipsum</C.FunctionsDesc>
                </C.Functions>
                <C.Functions>
                    <C.FunctionsSymbol><TrendingUpIcon className="logo"/></C.FunctionsSymbol>
                    <C.FunctionsDesc>Aplique loremi{<br/>}ipsum e muito mais</C.FunctionsDesc>
                </C.Functions>
                <C.Functions>
                    <C.FunctionsSymbol><BoltIcon className="logo"/></C.FunctionsSymbol>
                    <C.FunctionsDesc>Capacidade alta{<br/>}em lorem ipsum</C.FunctionsDesc>
                </C.Functions>
                <C.Functions>
                    <C.FunctionsSymbol><SmartToyIcon className="logo"/></C.FunctionsSymbol>
                    <C.FunctionsDesc>Interconexões{<br/>}com lorem ipsum</C.FunctionsDesc>
                </C.Functions>
            </C.FunctionsArea>

            <C.Image>
                <img src={ImageFunction} width="300px" alt=""/>
            </C.Image>
        </C.Container>
    )
}