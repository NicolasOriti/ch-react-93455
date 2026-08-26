import { BrowserRouter, Routes, Route } from "react-router";
import Navbar  from './components/Navbar';
import ProductListContainer from './components/ProductListContainer';
import Cart from './components/Cart';
import ProductDetailContainer from './components/ProductDetailContainer';

function App () {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-black">
            Product catalog
          </h1>
          {/* aca estan las rutas 👇 */}
          <Routes>
            <Route path="/" element={<ProductListContainer />} />
            <Route path="/category/:categoryName" element={<ProductListContainer />} />
            <Route path="/product/:id" element={<ProductDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
