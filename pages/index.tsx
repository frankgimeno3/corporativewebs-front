import { useState } from 'react';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';
import Footer from '../components/Navbar';

export default function Home() {
  const router = useRouter();
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("Home");

  const handlePageChange = (pageName: string) => {
    setCurrentPage(pageName);
  };
  let currentComponent;

  switch (currentPage) {
    case "Home":
      currentComponent = <Inicio />;
      break;
    case "QuienesSomos":
      currentComponent = <QuienesSomos />;
      break;
    case "Servicios":
      currentComponent = <Servicios />;
      break;
      case "Contacto":
      setCurrentPage('Contacto');
        break;
      case "Iniciarsesion":
      setCurrentPage("Iniciarsesion");
          break;
    default:
      currentComponent = <Inicio />;
  }
 

  return (
    <>
    <main className={`flex min-h-screen flex-col items-center  p-24  `}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
     

      <div className="flex flex-row bg-white w-full  mt-1 rounded-lg shadow-lg">
        <button className="px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
        <button className="px-4 py-2 cursor-pointer hover:bg-gray-200"
          
            onClick={() => navigateToSection('portfolio')}
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            Portfolio
            </button>
            <button className="px-4 py-2 cursor-pointer hover:bg-gray-200"
 
            onClick={() => navigateToSection('testimonials')}
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            Testimonios
            </button>
            </div>


     <Footer onPageChange={handlePageChange}/>
     </main>
     <div className="fixed bottom-0 right-0 p-4">
        <Floating />
        </div>
     </>
  );
}