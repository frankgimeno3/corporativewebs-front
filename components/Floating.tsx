import React, { useState, useEffect } from "react";
import Image from "next/image";

const Floating = () => {
  const [isVisible, setIsVisible] = useState(false);

  const divStyle = {
    backgroundImage: "url('/Llamanos.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      const scrollPercentage = (scrollY / (pageHeight - windowHeight)) * 100;

      if (scrollPercentage >= 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="py-16 relative px-16 text-sm rounded-full" style={divStyle}>
          <div className="absolute inset-0 text-center py-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-60 ">
            <div className="opacity-0 hover:opacity-100  ">
              <h3
                className="text-lg font-semibold text-black transition-opacity duration-300 p-4 mr-10"
              >
                Contáctanos
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Floating;