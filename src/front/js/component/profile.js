import { useContext, useEffect } from "react";
import React from "react";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.privado();
  }, []);
  return (
    <h1>
      {store.permiso
        ? `Acceso a espacio privado condedido ${store.user}`
        : "404 la pagina no existe"}
    </h1>
  );
};
