import { BrowserRouter, Routes, Route } from 'react-router';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import ProductDetailContainer from './components/ProductDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-50'>
        <Navbar />
        <main className='mx-auto max-w-6xl px-6 py-10'>
          {/* aca estan las rutas 👇 */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:categoryName' element={<HomePage />} />
            <Route path='/product/:id' element={<ProductDetailContainer />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
