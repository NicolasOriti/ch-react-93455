import ProductList from './ProductList'
// import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

const ProductListContainer = () => {
  // const [items, setItems] = useState([])
  
  // useEffect(() => {
  //   const getItems = async () => {
  //     const req = await fetch('https://dummyjson.com/products')
  //     const response = await req.json()
  //     setItems(response.products)
  //   }
    
  //   getItems()
  // }, [])

  const data = useFetch('https://dummyjson.com/products')

  if (!data) {
    return <div>cargando...</div>
  }

  return ( 
    <ProductList products={data.products} />
  )
}

export default ProductListContainer
