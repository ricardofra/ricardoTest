import './ProductColor.scss'

const ProductColor = (props: any) => {

  const handleActiveColor = (event: any) => {
    event.target.parentNode.childNodes.forEach((el: any) => {
      el.classList.remove('active')
    })
    event.target.classList.toggle('active')
  }

  return (
    <div className='colors'>
      <h3>Choose your finish.</h3>
      <div className="colors__list" onClick={(e) => handleActiveColor(e)}>
        <div className="colors__list--item">
          <p className='title'>{props.colors[0].name}</p>
          <p>{props.colors[0].description}</p>
        </div>
        <div className="colors__list--item">
          <p className='title'>{props.colors[1].name}</p>
          <p>{props.colors[1].description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductColor
