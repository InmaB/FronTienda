import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../functions/cartFunction';
import { NavLink, Link } from 'react-router-dom';

const Cesta = () => {
    const { items, removeItem, clearAllItems, totalPriceCart } = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    if (!Array.isArray(items) || items.length === 0) {
        return (
            <div className="container mx-auto animate__animated animate__fadeIn">
                <div className="flex justify-center">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-4" style={{ marginTop: '15px', marginBottom: '15px' }}>Tu carrito está vacío</h3>
                        <NavLink to="/">
                            <div className="d-grid gap-2">
                                <button
                                    type="button"
                                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-amber-200 hover:bg-amber-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Volver al listado
                                </button>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

        );
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
            <h1 className="font-family-name text-4xl" style={{ marginTop: '15px', marginBottom: '15px' }}>Cesta</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 py-15">
                <thead className="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th>Producto</th>
                        <th >Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((element) => {
                        if (element.item && element.item.id) {
                            return (
                                <tr key={element.item.id}>
                                    <td className="flex items-center">
                                        {element.item && element.item.price && (
                                            <>
                                                <img
                                                    className="mr-4 mb-2 mt-2 w-16 h-20"
                                                    src={element.item.image}
                                                    alt={element.item.title}
                                                />
                                                <span className="">{element.item.title}</span>
                                            </>
                                        )}
                                    </td>
                                    <td>{element.quantity}</td>
                                    <td>{element.item && element.item.price ? element.item.price : ''}</td>
                                    <td>{element.item && element.item.price ? element.item.price * element.quantity : ''}</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => removeItem(element.item.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                    <tr className="table-active">
                        <td colSpan="4">
                            <h2>
                                <span className="mr-2 text-lg text-amber-400 font-bold">
                                    Total: {totalPriceCart()}
                                </span>
                            </h2>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center mt-15">
                <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-amber-200 hover:bg-amber-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => clearAllItems()}
                >
                    Vaciar Carrito
                </button>
                <Link to="/">
                    <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-amber-200 hover:bg-amber-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Continuar compra
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cesta;
