import { useState, useEffect } from 'react'

function FetchCategories ({ render }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <>
      {render(categories)}
    </>
  )
}

export default FetchCategories
