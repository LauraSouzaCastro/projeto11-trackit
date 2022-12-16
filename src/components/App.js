import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './globalStyles';
import Login from "./Login";
import { useState } from 'react';
import { UsuarioContext } from './UsuarioContext.js';
import { HabitosContext } from './HabitosContext.js';
import Hoje from "./Hoje";
import Habitos from "./Habitos";
import Historico from "./Historico";
import Cadastro from "./Cadastro";
import Topo from "./Topo";
import Menu from "./Menu";

export default function App() {
  const [usuario, setUsuario] = useState({ email: "", id: "", image: "", name: "", password: "", token: "" });
  const [habitos, setHabitos] = useState([]);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UsuarioContext.Provider value={{ usuario }}>
        <Topo />
      </UsuarioContext.Provider>
      <UsuarioContext.Provider value={{ usuario }}>
        <HabitosContext.Provider value={{ habitos }}>
          <Menu />
        </HabitosContext.Provider>
      </UsuarioContext.Provider>
      <Routes>
        <Route path="/" element={
          <UsuarioContext.Provider value={{ setUsuario }}>
            <Login />
          </UsuarioContext.Provider>
        } />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/habitos" element={
          <UsuarioContext.Provider value={{ usuario }}>
            <HabitosContext.Provider value={{ habitos, setHabitos }}>
              <Habitos />
            </HabitosContext.Provider>
          </UsuarioContext.Provider>
        } />
        <Route path="/historico" element={<Historico />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>

  );
}

