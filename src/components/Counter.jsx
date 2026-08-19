import { useState } from 'react'

const Counter = () => {
  let [counter, setCounter] = useState(0)

  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  const handleDecrease = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <>
      <p className='text-black'>{counter}</p>
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
