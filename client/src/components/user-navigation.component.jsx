import React, { useContext } from "react";
import AnimationWrapper from "../common/page-animation";
import { Link } from "react-router-dom";
import { LuFileEdit } from "react-icons/lu";
import { UserContext } from "../App";
import { removeFromSession } from "../common/session";

const UserNavigationPanel = () => {
  const {
    userAuth: { username },
    setUserAuth,
  } = useContext(UserContext);

  const signOutUser = () => {
    removeFromSession("user");
    setUserAuth({ access_token: null });
  };

  return (
    <AnimationWrapper
      transition={{ duration: 0.2 }}
      className="absolute right-0 z-50"
    >
      <div className="bg-white absolute right-0 border border-grey w-60 duration-200 shadow-lg">
        <Link to={"/editor"} className="flex gap-2 link md:hidden pl-8 py-4">
          <LuFileEdit className="mt-0.5" />
          <p>Write</p>
        </Link>

        {/* 
        <Link to={"/dashboard/blogs"} className="link pl-8 py-4">
          Dashboard
        </Link>
        */}
        <Link to={`/solicitar-cueta/${username}`} className="link pl-8 py-4">
          Solicitar Cuenta
        </Link>
        <Link to={`/user/${username}`} className="link pl-8 py-4">
          Perfil
        </Link>
        <Link to={"/sttings/edit-profile"} className="link pl-8 py-4">
          Ajustes
        </Link>
        <span className="absolute border-grey ml-6 w[100%]"></span>
        <button
          className="text-left p-4 hover:bg-grey w-full pl-8 py-4"
          onClick={signOutUser}
        >
          <h1 className="font-bold text-xl mg-1">Cerrar Sesion</h1>
          <p className="text-dark-grey">@{username}</p>
        </button>
      </div>
    </AnimationWrapper>
  );
};

export default UserNavigationPanel;
