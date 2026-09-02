import { useCart } from '../context/cart/useCart';

function CartPage() {
  const { items, totalItems } = useCart();

  console.log('items', items);

  return (
    <div>
      <h2 className='text-black'>Pagina Carrito</h2>

      {items.length === 0 && <p className='text-black'>No hay productos en el carrito</p>}

      <div>
        {items.map((item) => (
          <div key={item.id} className='flex items-center justify-between border-b py-4'>
            <div className='flex items-center gap-4'>
              <img src={item.thumbnail} alt={item.title} className='h-16 w-16 object-cover' />
              <div>
                <h3 className='text-black'>{item.title}</h3>
                <p className='text-gray-600'>Cantidad: {item.quantity}</p>
              </div>
            </div>
            <p className='text-black'>${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
