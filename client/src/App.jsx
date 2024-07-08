import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nabvar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import { lookInSession } from "./common/session";
import SolicitarCuenta from "./pages/solicitar-cuenta.page";
import Directorio from "./pages/directorio/Directorio";
import Trabajador from "./pages/directorio/Trabajador";
import CuentaSolicitud from "./pages/CuentaSolicitud";

export const UserContext = createContext({});

const App = () => {
  const [userAuth, setUserAuth] = useState({ access_token: null }); // Inicializa con un objeto

  useEffect(() => {
    let userInSession = lookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ access_token: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route exact path="/" element={<Nabvar />}>
          <Route
            exact
            path="/signin"
            element={<UserAuthForm type={"sign-in"} />}
          />
          <Route
            exact
            path="/signup"
            element={<UserAuthForm type={"sign-up"} />}
          />
          <Route
            exact
            path="/solicitar-cueta/:user"
            element={<SolicitarCuenta />}
          />
          <Route exact path="/directorio" element={<Directorio />} />
          <Route
            exact
            path="/directorio/trabajador/nuevo"
            element={<Trabajador />}
          />
          <Route
            exact
            path="/directorio/trabajador/nuevo/cuenta"
            element={<CuentaSolicitud />}
          />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
