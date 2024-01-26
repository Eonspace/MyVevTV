import React from 'react'
import ShowCard from './Shows/ShowCard'

const ContentAreaDesign = () => {
  return (
    <div className='flex-1 box-border py-[16px] pr-[16px] scroll-smooth overflow-y-scroll hide-scrollbar'>
      <div>
        {/* slider */}
        <div className='w-full h-[400px] bg-black mb-[16px]'>

        </div>
        
        {/* latest updates */}
        <div className='mt-[40px]'>
          <div>
            <div className='text-[2rem] font-medium pb-[18px]'>Latest Updates</div>
          </div>
          <div className='w-full   h-auto gap-[24px] md:grid-cols-2 nsTsm:grid-cols-1 2xl:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid grid-cols-4 3xl:grid-cols-4'>

            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />


          </div>
        </div>

        {/* categories */}
        <div>
          
        </div>

      </div>
    </div>
  )
}

export default ContentAreaDesign