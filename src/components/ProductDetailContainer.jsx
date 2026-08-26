import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function ProductDetailContainer () {
  const [product, setProduct] = useState({thumbnail: '', title: '', price: 0, description: ''})
  const { id } = useParams()
 
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='flex justify-center'>
        <img src={product.thumbnail} alt={product.title} /> 
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='text-black text-2xl font-medium'>{product.title}</h3>
        <p className='text-black'>${product.price}</p>
        <p className='text-black'>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetailContainer
