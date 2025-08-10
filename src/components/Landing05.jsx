import React from 'react'

import Cards3Three from './Cards3Three'

const Landing05 = () => {
  return (
    <div className='pt-[30px]'>
      <div className="bada_dabba container max-w-[93vw] m-auto pl-[30px] pr-[30px]">
        <div className="upper ">
            <p className='font-bold text-2xl'>Clients and Feedback</p>
            <h3 className='font-bold text-3xl'>Customers and Testimonials</h3>
        </div>

        <div className="lower">
              <Cards3Three/>
        </div>
      </div>
    </div>
  )
}

export default Landing05
