import './ProductWarranty.scss'
const ProductWarranty = (props: any) => {
  const handleActiveWarranty = (event: any) => {
    event.target.parentNode.childNodes.forEach((el: any) => {
      el.classList.remove('active')
    })
    event.target.classList.toggle('active')
  }

  const warrantyItems = props.warranty.map((warranty: any) =>
    <div key={warranty.id} className='warranty__item'  onClick={(e) => handleActiveWarranty(e)}>
      <p className='title'>{warranty.name}</p>
      <p>{warranty.description}</p>
    </div>
  );

  return (
    <div className='warranty'>
      <h3>Would you like to add extended warranty coverage?.</h3>
      {warrantyItems}
    </div>
  )
}

export default ProductWarranty
