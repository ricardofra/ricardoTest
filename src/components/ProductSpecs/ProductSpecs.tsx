import './ProductSpecs.scss'

const ProductSpecs = (props: any) => {


  return (
    <div className='specs'>
      <h3>Specifications.</h3>
      <div className="specs__item">
        <p className="title">Dimensions</p>
        <p className="description">{props.specs.dimension}</p>
      </div>
      <div className="specs__item">
        <p className="title">USB Standard</p>
        <p className="description">{props.specs.usb_standard}</p>
      </div>
      <div className="specs__item">
        <p className="title">Power supply</p>
        <p className="description">{props.specs.power_suply}</p>
      </div>
      <div className="specs__item">
        <p className="title">Frequency response (Microphone)</p>
        <p className="description">{props.specs.frequency_response_microphone}</p>
      </div>
      <div className="specs__item">
        <p className="title">Frequency response</p>
        <p className="description">{props.specs.frequency_response}</p>
      </div>
      <div className="specs__item">
        <p className="title">Noise cancellation</p>
        <p className="description">{props.specs.noise_cancelation}</p>
      </div>
    </div>
  )
}

export default ProductSpecs
