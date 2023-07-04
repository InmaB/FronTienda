import React from "react";
import Logo from '../images/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <img src={Logo} alt="Logo" className="h-8 w-auto" />
                    <span className="ml-3 text-xl">Tienda online</span>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Tu tienda online de Confianza — Frontend con React —  Inma Balbuena </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
