import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const Header = () => {
    return (
        <>
            <header className="text-gray-600 body-font bg-blue-200">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link
                        className="flex title-font font-semibold items-center text-gray-900 mb-4 md:mb-0"
                        to="/"
                    >
                        <img src={Logo} alt="Logo" className="h-8 w-auto" />
                        <span className="ml-3 text-xl">Tienda online</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link
                            className="mr-5 hover:text-gray-900 border-r-2 pr-5"
                            to="/"
                        >
                            Inicio
                        </Link>

                        <Link
                            className="mr-5 hover:text-gray-900 border-r-2 pr-5"
                            to="/about"
                        >
                            Acerca de
                        </Link>
                    </nav>
                    <button className="inline-flex items-center bg-blue-300 border-0 py-1 mr-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">
                        Login
                    </button>
                    <button className="inline-flex items-center bg-blue-300 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">
                        Registro
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
