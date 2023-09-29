import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; 

interface NavbarProps {
  currentComponent: string;
  setCurrentComponent: (component: string) => void;
  isMenuOpen: any
  setIsMenuOpen: any
}

const Navbar: FC<NavbarProps> = ({ currentComponent, setCurrentComponent, isMenuOpen,
    setIsMenuOpen }) => {
  const router = useRouter();  


  const redirectHome = () => {
    setCurrentComponent('Inicio')
    setIsMenuOpen(false)
    router.push('/');
  };
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  }
 

  const handleSearchClick = () => {
    setCurrentComponent('Search')
    setIsMenuOpen(false)
  };
  const handleNotificationsClick = () => {
    setCurrentComponent('Notifications')
    setIsMenuOpen(false)
  };

  return (
    <div className="bg-white shadow-lg px-5 flex justify-between  px-6 py-1">
      <div className="flex items-center max-h-20 overflow-hidden" onClick={redirectHome}>  
        <Image src="/logos/3.png" alt="Logo3" width={150} height={10} className='object-cover '/>
      </div>
      <div className="flex items-center text-black">
        <div className="mr-4"  onClick={handleSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M8 10H6l-2 6h12l-2-6h-2"
            />
          </svg>
        </div>
        <div className="mr-4"  onClick={handleNotificationsClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <div    onClick={toggleMenu}>
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;