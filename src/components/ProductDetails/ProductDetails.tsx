import './ProductDetails.scss'

const ProductDetails = (props: any) => {

  const handleActiveDescription = (event: any) => {
    event.target.parentNode.childNodes.forEach((el: any) => {
      el.classList.remove('active')
    })
    event.target.classList.toggle('active')
    console.log(event.target.dataset.index);

    /* this piece of code needs a refactor to make it more scalable */
    const tab0: any = document.querySelector('.--description-0');
    const tab1: any = document.querySelector('.--description-1');
    const tab2: any = document.querySelector('.--description-2');
    const activeTab:any = document.querySelector(`.--description-${event.target.dataset.index}`);
    tab0.classList.remove('active');
    tab1.classList.remove('active');
    tab2.classList.remove('active');
    activeTab.classList.toggle('active');
  }

  return (
    <div className='details'>
      <nav>
        <ul className='details__navigation' onClick={(e) => handleActiveDescription(e)}>
          <li data-index="0" className='active'>{props.details[0].name}</li>
          <li data-index="1">{props.details[1].name}</li>
          <li data-index="2">{props.details[2].name}</li>
        </ul>
      </nav>
      <div className="details__description">
        <div className='--description-0 active'>{props.details[0].description}</div>
        <div className='--description-1'>{props.details[1].description}</div>
        <div className='--description-2'>{props.details[2].description}</div>
      </div>

    </div>
  )
}

export default ProductDetails
