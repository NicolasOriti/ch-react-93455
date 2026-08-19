export const withLowStock = (Component) => {
  function ComponentWithLowStock (props) {
    // renderizado condicional
    if (props.product.stock < 10) {
      return (
        <div className='border border-red-500 rounded-xl'>
          <Component {...props} />
        </div>
      )
    }

    return (
      <Component {...props} />
    )
  }

  return ComponentWithLowStock
}
