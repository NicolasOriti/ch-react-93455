import Navbar  from './components/Navbar';
import ProductListContainer from './components/ProductListContainer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">
          Product catalog
        </h1>
        <ProductListContainer />
      </main>
    </div>
  );
}

export default App;
