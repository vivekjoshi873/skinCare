import React from 'react'
import Navbar from '../components/Header/Navbar'
import rayStore1 from '../assets/store1.avif'
import rayStore2 from '../assets/store2.avif'
import rayStore3 from '../assets/store3.avif'
import rayStore4 from '../assets/store4.avif'
import appStore from '../assets/storeapporval.avif'
function Store() {
  
  return (
    <div>
      <Navbar/>
      <div className='container mx-auto py-16'>
        <h1 className='text-5xl font-medium m-12 max-w-[450px]'>Discover our shops and points of sale.</h1>
      </div>
      <div className='m-8 mt-20 overflow-x-hidden'>
        <h3 className='text-base font-medium  tracking-wide m-2'>Ray stores (4)</h3>
        <div className='flex gap-4 w-[100%] '>
          <div>
            <img src={rayStore1} alt="" />
            <h3 className='font-semibold font-sans tracking-wide'>Ray Ghent </h3>
            <p className='text-gray-500 tracking-wide my-3' >Veldstraat 62, Ghent</p>
            <p className='text-gray-500 tracking-wide' >Mon-Thur: 10:00 - 18:00</p>
            <p className='text-gray-500 tracking-wide' >Fri-Sat: 10:00 - 18:30</p>
            <p className='text-gray-500 tracking-wide' >Sun: Closed*</p>
            <p className='text-gray-500 leading-5 mt-6' >*Open on shopping Sunday: 12:00 - 18:00.</p>
          </div>
          <div>
            <img src={rayStore2} alt="" />
            <h3 className='font-semibold font-sans tracking-wide'>Ray Bruges</h3>
            <p className='text-gray-500 tracking-wide  my-3' >Zuidzandstraat 4, Brugge</p>
            <p className='text-gray-500 tracking-wide' >Mon-Thur: 10:00 - 18:00</p>
            <p className='text-gray-500 tracking-wide' >Fri-Sat: 10:00 - 18:30</p>
            <p className='text-gray-500 tracking-wide' >Sun: Closed*</p>
            <p className='text-gray-500 leading-5 mt-6' >*Open on shopping Sunday: 12:00 - 18:00.</p>
          </div>
          <div>
            <img src={rayStore3} alt="" />
            <h3 className='font-semibold font-sans tracking-wide leading-8 '>Ray Leuven</h3>
            <p className='text-gray-500 tracking-wide  my-3'>Mechelsestraat 31, Leuven</p>
            <p className='text-gray-500 tracking-wide' >Mon-Thur: 10:00 - 18:00</p>
            <p className='text-gray-500 tracking-wide' >Fri-Sat: 10:00 - 18:30</p>
            <p className='text-gray-500 tracking-wide' >Sun: Closed*</p>
            <p className='text-gray-500 leading-5 mt-6' >*Open on shopping Sunday: 12:00 - 18:00.</p>
          </div>
          <div>
            <img src={rayStore4} alt="" />
            <h3 className='font-semibold font-sans tracking-wide'>Ray Antwerp </h3>
            <p className='text-gray-500 tracking-wide  my-3'>Wiegstraat 36, Antwerp</p>
            <p className='text-gray-500 tracking-wide' >Mon-Thur: 10:00 - 18:00</p>
            <p className='text-gray-500 tracking-wide' >Fri-Sat: 10:00 - 18:30</p>
            <p className='text-gray-500 tracking-wide' >Sun: Closed*</p>
            <p className='text-gray-500 leading-5 mt-6' >*Open on shopping Sunday: 12:00 - 18:00.</p>
          </div>
        </div>
      </div>
      <div className='m-8 mt-20'>
        <div className='flex '>
          <img src={appStore} className='w-[50%] h-[800px] object-cover py-11' alt="" />
          <div className='w-[38%]  mx-auto'>
            <h1 className='text-5xl font-medium font-sans m-9 leading-none'>You can visit our stores for personal advice on your skin and routine.</h1>
            <div className="my-12 mx-8">
              <p className='text-gray-800 tracking-wide'>Questions?</p>
              <p className='text-gray-500 tracking-wide mt-2'>About your routine, your skin, or a product? Then come visit Ray's stores in Bruges, Leuven, Antwerp, and Ghent. Our skincare experts will be happy to assist you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
