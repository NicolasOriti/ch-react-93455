import { useParams } from 'react-router';

import { useProducts } from '../hooks/useProducts';
import ProductList from './ProductList';

const ProductListContainer = () => {
  const { categoryName } = useParams();

  const { products, loading, loadingMore, error, hasMore, loadMore } = useProducts({
    category: categoryName,
  });

  if (error) {
    return (
      <div className='rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700'>
        <p className='font-semibold'>Could not load the products.</p>
        <p className='mt-2 break-all'>{error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p className='text-center text-gray-500'>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className='text-center text-gray-500'>No products found.</p>;
  }

  return <ProductList products={products} />;
};

export default ProductListContainer;
