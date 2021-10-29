import './ProductTitle.scss'

const ProductTitle = (props: any) => {
  return (
    <div className='productTitle'> 
      <p className="new-release">New release</p>
      <h1>{props.productTitle}</h1>
      <h2>{props.description}</h2>
      <p className="starting-at">Starting at</p>
      <p className="price">${props.price}</p>
    </div>
  )
}

export default ProductTitle
