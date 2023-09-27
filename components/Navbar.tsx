import React from 'react';
import { useRouter } from "next/router";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (pageName: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const changePage = (pageName: string) => {
    setCurrentPage(pageName);
  };
  const router = useRouter();

  const handleHomeClick = () => {
    changePage('Inicio')
    router.push("/");
  };

  const handleQuienesClick = () => {
    changePage('Servicios')
    router.push("/");
  };
  const handleServiciosClick = () => {
    changePage('Contacto')
    router.push("/");
  };

  const handleIniciarSesionClick = () => {
    changePage('Solicitarpresupuesto')
    router.push("/login");
  };

  const gotocontacts = () =>{
    setCurrentPage("Contacto")
       router.push("/contactanos");
    };

   return (
    <nav className="fixed top-0 left-0 w-full bg-black py-3 flex flex-row  justify-center z-50 align-center font-sans">
      <h2 className="font-medium text-2xl mx-5 mb-1 text-yellow-500">Giru.es</h2>
      <button
        className={`mx-5 text-sm ${currentPage === 'Home' ? 'text-white' : 'text-yellow-500'}`}
        onClick={handleHomeClick}
      >
        Home
      </button>
      <button
        className={`mx-5 text-sm ${currentPage === 'QuienesSomos' ? 'text-white' : 'text-yellow-500'}`}
        onClick={handleQuienesClick}
      >
        Nosotros
      </button>
      <button
        className={`mx-5 text-sm ${currentPage === 'Servicios' ? 'text-white' : 'text-yellow-500'}`}
        onClick={handleServiciosClick}
      >
        Servicios
      </button>
      <button
        className={`mx-5 text-sm ${currentPage === 'Contacto' ? 'text-white' : 'text-yellow-500'}`}
        onClick={gotocontacts}
        >
        Contáctanos
      </button>
      <button className="bg-yellow-500 text-black rounded-lg shadow-lg px-2 py-1 font-bold mx-5 text-sm"
      onClick={handleIniciarSesionClick}
    >
      INICIAR SESIÓN
    </button>
    </nav>
  );
};

export default Navbar;