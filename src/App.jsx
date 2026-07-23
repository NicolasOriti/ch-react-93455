import { products } from './data/products';

import ProductList from './components/ProductList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">Product catalog</h1>
        <ProductList products={products} />
      </main>
    </div>
  );
}

// const titleh1 = document.createElement('h1', { id: 'title' });
// titleh1.innerHTML = 'Hola mundo';

export default App;
