import './Footer.scss'

const Footer = (props: any) => {
  return (
    <footer className='footer'>
      <div className="wrapper">
        <div className="footer__left-content">
          <div>
            <h4>Free Shipping</h4>
            <p>Get 2-day free shipping anywhere in North America.</p>
          </div>
          <div>
            <h4>2 years warranty</h4>
            <p>If anything goes wrong in the first two years, we'll replace it for free.</p>
          </div>
        </div>
        <div className="footer__right-contetn">
          <div className="footer__right-contetn--price">
            <h4>${props.price}</h4>
            <p>Need financing? Learn more</p>
          </div>
          <button className='btn'>Buy now</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer