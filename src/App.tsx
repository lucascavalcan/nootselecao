import * as C from "./App.styles";
import "./App.css";

import { Header } from "./components/Header";
import { Cadastro } from "./components/Cadastro";
import { Clients } from "./components/Clients";
import { Funcionalidades } from "./components/Funcionalidades";
import { Cadastro2 } from "./components/Cadastro2";
import { Sobre } from "./components/Sobre";
import { Footer } from "./components/Footer";



const App = () => {
  return (
    <div>
      <C.Container>
        
        <div id="Home">
          <Header/>
        </div>
        
        <Cadastro/>

        <div id="Clientes">
          <Clients/>
        </div>

        <div id="Funcionalidades">
          <Funcionalidades/>
        </div>
        
        <Cadastro2/>
        
        <div id="Sobre">
           <Sobre/>
        </div>
        
        <Footer/>
      </C.Container>
    </div>
  );
}

export default App;
