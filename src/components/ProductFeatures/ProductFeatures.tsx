import  './ProductFeatures.scss'

const ProductFeatures = (props: any) => {
  const handleActivefeature = (event: any) => {
    event.target.parentNode.childNodes.forEach((el: any) => {
      el.classList.remove('active')
    })
    event.target.classList.toggle('active')
  }

  const featureItems = props.features.map((feature: any) =>
    <div key={feature.id} className='features__item'  onClick={(e) => handleActivefeature(e)}>
      <p className='title'>{feature.name}</p>
      <p>{feature.description}</p>
    </div>
  );

  return (
    <div className='features'>
      <h3>Features.</h3>
      {featureItems}
    </div>
  )
}
export default ProductFeatures
