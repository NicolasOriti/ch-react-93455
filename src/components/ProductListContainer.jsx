import ProductList from './ProductList'
import { useState, useEffect } from 'react'
import { products } from '../data/products'

const ProductListContainer = () => {
  const [items, setItems] = useState([])
  
  // simular una llamada a una "api"
  useEffect(() => {
    const getProducts = () => new Promise((resolve, reject) => {
      if (products.length > 0) {
        resolve(products)
      }
      reject({ error: 'no hay productos' })
    })

    getProducts()
      .then(data => {
        setTimeout(() => {
          setItems(data)
        }, 3000)
      })
  }, [])

  return ( 
    <ProductList products={items} />
  )
}

export default ProductListContainer
