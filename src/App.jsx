import { products } from './data/products';

import ProductList from './components/ProductList';
import Navbar  from './components/Navbar';
import BlackBg from './components/BlackBg';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <BlackBg>
        <main className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="mb-8 text-white text-3xl font-bold tracking-tight">
            Product catalog
          </h1>
          <ProductList products={products} />
        </main>
      </BlackBg>
    </div>
  );
}

export default App;
