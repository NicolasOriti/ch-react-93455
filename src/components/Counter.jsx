import { useState, useEffect } from 'react'

const Counter = () => {
  let [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('se ejecuto el efecto')

    return () => { // funcion de limpieza o cleanup function
      console.log('el componente se desmonto')
    }
  }, [counter]) // array de dependencias

  // [] -> el efecto solo se ejecuta 1 vez, en el montaje
  // [a, b] -> el efecto se va a ejecutar en el montaje y cuando "a" o "b" cambien de valor
  // Desmontaje -> hay que hacer una funcion de limpieza

  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  const handleDecrease = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <>
      <p>{counter}</p>
      <div className='flex gap-2'>
        <button 
          className="mt-auto rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          onClick={handleIncrease}
        >
          +
        </button>
        <button className="mt-auto rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          onClick={handleDecrease}
        >
          -
        </button>
        <button className="mt-auto rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700">
          Add to cart
        </button>
      </div>
    </>
  )
}

export default Counter
