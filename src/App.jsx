import Navbar  from './components/Navbar';
import ProductListContainer from './components/ProductListContainer';
import Categories from './components/Categories';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Categories />
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-black">
          Product catalog
        </h1>
        <ProductListContainer />
      </main>
    </div>
  );
}

export default App;
