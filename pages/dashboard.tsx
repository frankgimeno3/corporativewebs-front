import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
    const router = useRouter();

    const handleReturn = () => {
        router.push('/');
    };

    return (
        <div className="bg-white">
            <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-5 py-3 flex flex-row  justify-left z-50   ">

                <button
                    className="bg-yellow-500 text-black rounded-lg shadow-lg px-5 py-3  mx-5 text-sm "
                    onClick={handleReturn}
                >
                    Cerrar sesión              </button>
            </nav>
            <div className=" h-screen flex flex-col justify-center items-center   relative ">
                <div className="mt-24  w-full py-16 z-10 text-gray-800">
                    <h1 className="w-full text-center font-bold text-4xl text-white ">
                        INICIAR SESIÓN
                    </h1>
                    <p className="w-full px-5 text-center text-lg  md:text-xl text-white ">
                       Bienvenido a su interfaz de usuario
                    </p>
                    <div className="md:mx-24 md:px-24 mt-5">
                    <h2>Aquí tiene que ir un formulario para pedir presupuestos</h2>
                    <h2>Luego, un listado de los proyectos en curso</h2>
                          <h2>Luego, para cada proyecto, link al repo, capturas del estado, contrato de especificaciones y factura adjuntos</h2>
                    <h2>Abajo, listado de todos los proyectos realizados anteriormente con la compañía</h2>
                    </div>
                </div>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
                    <img
                        src="/bananobanner.png"
                        alt="Giruking Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            {/* <Footer onPageChange={handlePageChange} /> */}
        </div>
    );
}