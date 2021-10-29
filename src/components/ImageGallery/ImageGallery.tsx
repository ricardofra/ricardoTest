import { useState } from 'react';
import './ImageGallery.scss'

const ImageGallery = (props: any) => {

  const [selectedImage, setSelectedImage] = useState<any>(props.images[0].x3)

  const handleActiveImage = (event: any) => {
    event.target.parentNode.childNodes.forEach((el: HTMLElement) => {
      el.classList.remove('active')
    })
    event.target.classList.toggle('active')
    setSelectedImage(props.images[event.target.dataset.index].x3)
  }

  return (
    <>
      <div className='product-images'>
        <div className="main-image">
          <img src={selectedImage} alt="" />
        </div>
        <div className="product-images--gallery">
          <nav>
            <ul onClick={(e) => handleActiveImage(e)}>
              <li data-index="0" ><img src={props.images[0].x1} alt="" /> </li>
              <li data-index="1"><img src={props.images[1].x1} alt="" /> </li>
              <li data-index="2"><img src={props.images[2].x1} alt="" /> </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="product-images--details">
        <ul >
          <li>
            <img src={props.details[0].images.x1} alt="" />
            <p>{props.details[0].name}</p>
          </li>
          <li>
            <img src={props.details[1].images.x1} alt="" />
            <p>{props.details[1].name}</p>
          </li>
          <li>
            <img src={props.details[2].images.x1} alt="" />
            <p>{props.details[2].name}</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ImageGallery
