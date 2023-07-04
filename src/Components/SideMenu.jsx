
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import avatar from "../images/avatar.jpg"

const SideMenu = () => {
  return (
    <>
      <aside className="w-full" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-white rounded dark:bg-gray-800">
          <div className="flex items-center space-x-4 p-2 mb-5">
            <img
              className="h-12 rounded-md border-3 border-gray-300"
              src={avatar}
              alt="Usuario"
            />

            <div>
              <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
                Bienvenido Usuario
              </h4>
            </div>
          </div>
          <ul className="space-y-2">
            {/* Cesta */}
            <li>
              <Link to="/cart"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-yellow-200 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="ml-3">Cesta</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
