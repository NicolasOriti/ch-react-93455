import { useState } from 'react';

import { useCart } from '../context/cart/useCart';

const Counter = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const { addItem, isInCart } = useCart();

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  return (
    <>
      <p className='text-black'>{quantity}</p>
      <div className='flex gap-2'>
        <button
          className='mt-auto rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700'
          onClick={handleIncrease}
        >
          +
        </button>
        <button
          className='mt-auto rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700'
          onClick={handleDecrease}
        >
          -
        </button>
        <button
          className='mt-auto rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700'
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Counter;
