import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; 

// interface NavbarProps {
//   currentComponent: string;
//   setCurrentComponent: (component: string) => void;
// }

// const Navbar: FC<NavbarProps> = ({ currentComponent, setCurrentComponent }) => {

const ContactUs: FC = ({  }) => {
   const router = useRouter();  

   

   return (
    <div className="h-screen bg-gradient-to-b from-zinc-900 to-zinc-600">
      <h2 className="bg-zinc-800 mx-6 font-bold text-lg px-5 py-3">Contact us</h2>
    <div className=" mx-6  bg-white  h-full text-zinc-900">
      <div className="p-5">

        </div>
      </div>
    </div>
  );
};

export default ContactUs;