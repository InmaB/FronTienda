import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from './functions/cartFunction';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import ItemInfo from "./Components/ItemInfo"
import Cart from "./Pages/Cart"
import Inicio from "./Pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/item/:id" element={<ItemInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
          <Footer></Footer>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
