import Image from "next/image";
import { useRouter } from "next/router";

interface FooterProps {
   onPageChange: (pageName: string) => void;
}
const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const router = useRouter();

  const redirection = (pageName: string) => {
    onPageChange(pageName)
    router.push("/");
  };

  return (
    <footer className="bg-gray-900 py-12 relative px-24 text-sm">

<div className="mx-24 text-white relative z-10">
        <div className="flex flex-row  items-top justify-between align-top">
          <div className="mb-4 flex-1">
            <h3 className="text-md font-semibold">Sobre Nosotros</h3>
            <p className="text-md mt-5">
            Giru.es es una agencia de desarrolladores web con sede en Barcelona, comprometidos en ofrecer soluciones de desarrollo de software de alta calidad. Nuestro equipo está formado por expertos en diferentes tecnologías y estamos dedicados a ayudar a nuestros clientes a alcanzar sus objetivos tecnológicos.
            </p>
            <p className="text-md">
            Actualmente, formamos parte del grupo PROPORCION3,S.A. medios de comunicación .</p>
          </div>
          <div className="mb-4  flex-1 text-center" >
            <h3 className="text-md font-semibold">Enlaces Rápidos</h3>
            <div className="  flex flex-col">
                 <button className="mt-5" onClick={() => redirection('Home')} >Inicio</button>
                 <button className="mt-5" onClick={() => redirection('QuienesSomos')} >Nosotros</button>
                 <button className="mt-5" onClick={() => redirection('Servicios')} >Servicios</button>
                 <button className="mt-5" onClick={() => redirection('Contacto')} >Contacto</button>
             </div>
          </div>
          <div className="flex-1">
            <h3 className="text-md font-semibold">Contáctanos</h3>
            <address className="flex flex-col text-sm mt-5">
              <p>Dirección: Bruc 48, Barcelona</p>
              <p>Teléfono: (+34) *** *** ***</p>
              <p>Email: info@giru.es</p>
            </address>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          &copy; 2023 PROPORCION3,S.A. | Todos los derechos reservados
        </div>
      </div>
 
       <Image
        src="/bananobanner.png"
        alt="Bananobanner"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        width={3000} height={450}
      />
    </footer>
  );
};

export default Footer;
