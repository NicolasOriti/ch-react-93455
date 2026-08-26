import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProductList from './ProductList'

const ProductListContainer = () => {
  const [items, setItems] = useState([])
  const { categoryName } = useParams()
  
  useEffect(() => {
    const urlBase = 'https://dummyjson.com/products'
    const urlCategories = `https://dummyjson.com/products/category/${categoryName}`
    
    fetch(categoryName ? urlCategories : urlBase)
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, [categoryName])

  return ( 
    <ProductList products={items} />
  )
}

export default ProductListContainer
