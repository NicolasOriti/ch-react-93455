import SearchInput from './SearchInput'
import Categories from './Categories'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">Temu no es nada</Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Categories />
        </ul>
        <SearchInput />
        <Link to='/cart' className="cursor-pointer text-2xl transition-transform hover:scale-110">
          🛒
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
