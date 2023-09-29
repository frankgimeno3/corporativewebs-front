import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';


const Login: FC = () => {
  const router = useRouter();
  const [tipoConsulta, setTipoConsulta] = useState('');
  const [regionSeleccionada, setRegionSeleccionada] = useState("");
  const [sectorSeleccionado, setSectorSeleccionado] = useState("");

  const setOfertas = () => {
    setTipoConsulta('Ofertas');
  };

  const setTrabajadores = () => {
    setTipoConsulta('Trabajadores');
  };

  return (
    <div className="h-screen bg-gradient-to-b from-zinc-900 to-zinc-600">
      <h2 className="bg-zinc-800 mx-6 font-bold text-lg px-5 py-3">Login</h2>
      <div className=" mx-6  bg-white  h-full text-zinc-900">
        <div className="p-5">
          <h2 >Seguir esta estructura</h2>
          <div className="flex flex-row pt-1 text-xs">
            <button
              className={`${tipoConsulta == 'Ofertas' ? 'bg-zinc-500 text-zinc-100 shadow-lg' : 'bg-zinc-100 text-zinc-700 shadow-lg'
                } p-2 w-full mr-1 rounded-xs`}
              onClick={setOfertas}
            >
              Ofertas de empleo
            </button>
            <button
              className={`${tipoConsulta == 'Trabajadores' ? 'bg-zinc-500 text-zinc-100 shadow-lg' : 'bg-zinc-100 text-zinc-700 shadow-lg'
                } p-2 w-full ml-1 rounded-xs`}
              onClick={setTrabajadores}
            >
              Contenido
            </button>
          </div>
           </div>
      </div>
    </div>
  );
};

export default Login;