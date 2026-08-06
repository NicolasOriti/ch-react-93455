import { useRef } from 'react'

const SearchInput = () => {
  const inputRef = useRef('')

  const handleInput = () => {
    console.log(inputRef.current.value)
  }

  return (
    <input 
      ref={inputRef}
      type="text" 
      placeholder='search...' 
      className='border border-gray-300 px-4 py-1 rounded'
      onInput={handleInput}
    />
  )
}

export default SearchInput
