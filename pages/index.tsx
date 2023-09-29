import Image from 'next/image'
import Navbar from '../components/Navbar'
 import Inicio from '../components/screens/Inicio'
import Login from '../components/screens/Login'
import Services from '../components/screens/Services'
import ContactUs from '../components/screens/ContactUs'
import { useState } from 'react'
import { useRouter } from "next/router";

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState("Inicio")
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();


  const handlePageChange = (pageName: string) => {
    setCurrentComponent(pageName);
  };

  let componentToRender;

  switch (currentComponent) {
    case "Inicio":
      componentToRender = <Inicio />;
      break;
    case "Login":
      componentToRender = <Login />;
      break;
    case "Services":
      componentToRender = <Services />;
      break;
    case "ContactUs":
      componentToRender = <ContactUs />;
      break;
    
    default:
      componentToRender = <Inicio />;  
      break;
  }
 
 
  const handleServicesClick = () => {
    setCurrentComponent('Services')
    setIsMenuOpen(false)
  };

  const handleLoginClick = () => {
    setCurrentComponent('Login')
    setIsMenuOpen(false)
  };

  const handleContactUsClick = () => {
    setCurrentComponent("ContactUs")
    setIsMenuOpen(false)
  };
  const handleCerrarSesion = () => {
    router.push('/');
    setIsMenuOpen(false)
  };
  return (
    <main className='h-screen bg-zinc-500'>
        <Navbar currentComponent={currentComponent} setCurrentComponent={setCurrentComponent}
          isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {componentToRender}
       <div className={isMenuOpen ? 
          'fixed top-0 right-0 flex flex-col text-gray-800 z-50 bg-zinc-800  mt-20 ' : 'hidden'}>
          <ul className='flex flex-col text-md text-gray-100 w-screen '>
            <button  className='py-2 hover:bg-zinc-500' onClick={handleServicesClick}>
              Services
            </button>
            <button className='py-2 hover:bg-zinc-500' onClick={handleContactUsClick}>
              Contact us
            </button>
            <button className='py-2 hover:bg-zinc-500' onClick={handleLoginClick}>
              Login
            </button>

          </ul>
        </div>
    </main>
  )
}