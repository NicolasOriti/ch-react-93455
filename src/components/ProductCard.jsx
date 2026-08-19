import Counter from './Counter'

const ProductCard = ({ product }) => { // componente presentacional
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.category}
        </span>
        <h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>
        <p className="text-xl font-bold text-gray-900">${product.price}</p>
        <p className="text-xl font-bold text-gray-900">
          stock: {product.stock}
        </p>
        <Counter />
      </div>
    </article>
  );
};


export default ProductCard;
