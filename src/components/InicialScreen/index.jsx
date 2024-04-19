/* eslint-disable @next/next/no-img-element */
import React from "react";

const index = () => {
  return (
    <div className="h-screen bg-truckInicial bg-no-repeat bg-cover bg-center flex flex-col items-center justify-start">
      <img
        draggable="false"
        className="w-1/6"
        src="/InicialScreen/LogoAnatonelly.svg"
        alt="Caminhão"
      />
      <img
        draggable="false"
        className="w-3/6"
        src="/InicialScreen/LogoGrupoAnatonelly.svg"
        alt="Caminhão"
      />
      <div className="h-auto py-2 w-full bg-neutral-500/80 flex items-center justify-center gap-40">
        <img
          draggable="false"
          src="/InicialScreen/AnatonellyTech.svg"
          alt="Caminhão"
        />
        <img
          draggable="false"
          src="/InicialScreen/GlobalTransportes.svg"
          alt="Caminhão"
        />
        <img
          draggable="false"
          src="/InicialScreen/AnatonellyTech.svg"
          alt="Caminhão"
        />
        <img
          draggable="false"
          src="/InicialScreen/GlobalTransportes.svg"
          alt="Caminhão"
        />
      </div>
    </div>
  );
};

export default index;
