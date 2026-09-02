import React from 'react';
import ProductListContainer from '../components/ProductListContainer';

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <h1 className='mb-8 text-3xl font-bold tracking-tight text-black'>Product catalog</h1>
      <ProductListContainer></ProductListContainer>
    </>
  );
}

export default HomePage;
