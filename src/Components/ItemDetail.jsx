import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../functions/cartFunction';

const ItemDetail = ({ product }) => {
  const { title, price, image, description } = product;
  const { addItem } = useContext(CartContext);
  const [hideItemCount, setHideItemCount] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);


  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = (quantity) => {
    addItem(product, quantity);
    setAddedToCart(true);
    setHideItemCount(true);
    console.log(product)
  };


  return (
    <div className="container mx-auto">
      <div className="flex justify-center animate__animated animate__fadeIn">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <h3 className="text-center text-xl mb-4 font-bold" style={{ marginTop: '15px', marginBottom: '15px' }}>{title}</h3>
            <dl>
              <br />
              <dd>
                <img
                  className="mx-auto"
                  src={image}
                  alt={title}
                  style={{ maxWidth: '500px', maxHeight: '432px' }}
                />
              </dd>
              <h4 className="text-center text-xl mb-4 font-bold text-blue-500" style={{ marginTop: '15px' }} >{price} €</h4>
              <dt style={{ fontWeight: 'bold' }}>Descripción</dt>
              <dd style={{ textAlign: 'justify' }}>{description}</dd>
            </dl>
            <Button
              className="mb-4 py-2 px-4 bg-yellow-200 hover:bg-yellow-300 text-gray-900 font-bold" style={{ marginTop: '15px', marginBottom: '15px' }}
              onClick={handleGoBack}
            >
              Atras
            </Button>
          </div>
          <div className="md:w-1/3">
            {!hideItemCount ? (
              <div>
                <p className="mt-4">Cantidad:</p>
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue="1"
                  className="w-16 py-2 px-4 border border-gray-400 rounded"
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <Button
                  variant="primary"
                  size="sm"
                  className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold"
                  onClick={() => handleAddToCart(quantity)}
                >
                  Agregar al carrito
                </Button>

              </div>
            ) : (
              <Link to="/cart">
                <Button
                  variant="success"
                  size="lg"
                  className="mt-4 py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-bold"
                >
                  Ver carrito
                </Button>
              </Link>
            )}
            {addedToCart && (
              <div className="mt-4 text-center">
                <p className="text-green-500 font-bold">
                  Producto(s) agregado(s) al carrito exitosamente.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
