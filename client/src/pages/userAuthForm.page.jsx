import React, { useContext, useState, useEffect } from "react";
import InputBox from "../components/input.component";
import { RiUserLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { BsKey } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";
import clienteAxios from "../config/axios";
import { Toaster, toast } from "react-hot-toast";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";

const UserAuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  let {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);

  useEffect(() => {
    if (access_token) {
      navigate("/directorio")
    }
  }, [access_token, navigate]);

  console.log(access_token);
  const registrarUsuario = async (serverRoute, formData) => {
    try {
      const respuesta = await clienteAxios.post(serverRoute, formData);
      console.log(respuesta.data);
      console.log(formData);

      if (respuesta.data) {
        storeInSession("user", JSON.stringify(respuesta.data));
        setUserAuth(respuesta.data);
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute =
      type === "sign-in" ? "/api/auth/signin" : "/api/auth/signup";

    registrarUsuario(serverRoute, formState);
  };

  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return access_token ? (
    navigate("/directorio")
  ) : (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center">
        <Toaster />
        <form
          id="formElement"
          className="w-[80%] max-w-[400px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type === "sign-in" ? "Bienvenido!" : "Unete a nosotros"}
          </h1>
          {type !== "sign-in" && (
            <InputBox
              icon={RiUserLine}
              name="name"
              type="text"
              placeholder="Nombre"
              value={formState.name}
              onChange={handleChange}
            />
          )}

          <InputBox
            icon={MdAlternateEmail}
            name="email"
            type="email"
            placeholder="correo"
            value={formState.email}
            onChange={handleChange}
          />
          <InputBox
            icon={BsKey}
            name="password"
            type="password"
            placeholder="contraseña"
            value={formState.password}
            onChange={handleChange}
          />

          <button className="btn-dark center mt-14" type="submit">
            {type === "sign-in" ? "Entrar" : "Crear Cuenta"}
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>_</p>
            <hr className="w-1/2 border-black" />
          </div>
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
