import React from 'react'
import Data from './dummyData'

const ProductListing = () => {

  const weatherCondition = (temp) => {
    if(temp <= 28) {
      return 'bg-blue-500';
    } else {
      return 'bg-red-500';
    }
  };

  const displayCards = () => {
    return Data.map((obj) => (
      <div className='w-full md:w-1/3 mb-6'>
        <div className={` rounded-lg shadow-lg p-4 ${weatherCondition(obj.Temperature)}`}>
          <img className='w-full h-48 object-cover rounded-t-lg' src={obj.img} alt="" />
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-gray-800'>{obj.location}</h3>
            <hr className='my-2' />
            <h5 className='text-base font-semibold text-gray-600'>Temperature : {obj.Temperature}</h5>
            <h5 className='text-base font-semibold text-gray-600'>Humidity : {obj.Humidity}</h5>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <section className='py-12'>
        <h1 className='text-center text-3xl font-bold mb-8'>Today's Sky Story</h1>
        <div className='container mx-auto'>
            <div className='flex flex-wrap'>
              {displayCards()}
            </div>
        </div>
      </section>
    </div>
  )
}

export default ProductListing
