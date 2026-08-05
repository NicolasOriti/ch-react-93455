const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">Temu no es nada</h1>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <li><a href="#" className="transition-colors hover:text-gray-900">Home</a></li>
          <li><a href="#" className="transition-colors hover:text-gray-900">Products</a></li>
          <li><a href="#" className="transition-colors hover:text-gray-900">About</a></li>
        </ul>
        <span className="cursor-pointer text-2xl transition-transform hover:scale-110">🛒</span>
      </nav>
    </header>
  )
}

export default Navbar
