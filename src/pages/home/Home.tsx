
import React from 'react'


export const Home = () => {
  return (
    <>
      <div className='container ml-20'>
        <div className='text-6xl font-bold text-white mt-[210px] font-serif text-left mb-5'>
        W<span className='text-3xl'>elcome to</span> Deng Tiger 
        </div>
        <div className='grid grid-cols-12'>
          <p className='col-span-5 font-sans text-lg text-white'>
           <span className='text-2xl'>W</span>e've built our offerings on the principle that everyone deserves high-quality design without the high cost. We offer elevated rental inventory, to transform your space. Reuse and recycle - we make the decision as light as a “feather”
          </p>
        </div>
        <div className='flex mt-8'>
          <button className='px-8 py-2 text-lg font-bold text-white bg-transparent border rounded-full hover:bg-white hover:text-gray-800'>
            Shop Now
          </button>
        </div>
      </div>
    </>
  )
}
