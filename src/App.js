import Footer from "./components/Footer";
import Menu from "./components/Navbar/Menu";

import {CartProvider} from "./components/context/CartContext";

function App() {
  return (
      <CartProvider>
        <div className="App">
          <Menu/>
          <Footer/>
        </div>
      </CartProvider>
  );
}

export default App;
