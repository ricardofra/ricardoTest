import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ProductColor from '../../components/ProductColor/ProductColor';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures';
import ProductSpecs from '../../components/ProductSpecs/ProductSpecs';
import ProductTitle from '../../components/ProductTitle/ProductTitle';
import ProductWarranty from '../../components/ProductWarranty/ProductWarranty';
import './Products.scss'

import { getData } from '../../services/service';

const Home = () => {
  const [isLoaded, setisLoaded] = useState(false)
  const [prouctData, setProuctData] = useState<any>({})

  useEffect(() => {
    getData()
      .then(
        response => {
          setProuctData(response.data[0]);
          setisLoaded(true)
        },
        error => console.log(error)
      )
  }, [])

  return (
    <>
      <Header />
      <div className="wrapper">
        <main className='product'>
          {isLoaded &&
            <>
              <div className="col--left">
                <ImageGallery images={prouctData.images} details={prouctData.technical_details} />
              </div>

              <div className="col--right">
                <ProductTitle productTitle={prouctData.title} description={prouctData.description} price={prouctData.price} />
                <ProductDetails details={prouctData.details} />
                <ProductColor colors={prouctData.colors}/>
                <ProductWarranty warranty={prouctData.warranty} />
                <ProductFeatures features={prouctData.features} />
                <ProductSpecs specs={prouctData.specs} />
              </div>
            </>}
        </main>
      </div>
      <Footer price={prouctData.price} />
    </>
  )
}

export default Home;
