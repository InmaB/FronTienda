import { Link } from 'react-router-dom';
import error from '../images/error.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-2xl md:text-3xl font-light mb-4">
          Lo siento, página no encontrada
        </h1>

        <Link
          to="/"
          className="px-4 py-2 text-sm font-medium text-black bg-blue-300 rounded-lg shadow hover:bg-yellow-300"
        >
          Vuelve al inicio
        </Link>
      </div>
      <div className="max-w-lg mt-8">
        <img src={error} alt="No encontrado" className="mx-auto" style={{ maxHeight: '400px' }} />
      </div>
    </div>
  );
};

export default NotFound;
