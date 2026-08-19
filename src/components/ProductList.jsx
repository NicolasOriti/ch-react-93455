import ProductCard from './ProductCard';
import { withLowStock } from '../hoc/withLowStock';

const ProductCardWithLowStock = withLowStock(ProductCard)

const ProductList = ({ products }) => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCardWithLowStock 
          key={product.id} 
          product={product} 
        />
      ))}
    </section>
  );
};

export default ProductList;
