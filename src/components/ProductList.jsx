import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
        />
      ))}
    </section>
  );
};

export default ProductList;
