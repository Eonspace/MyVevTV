import Image from 'next/image';
import React from 'react';
import exampleThumb from '@/public/drama/Falling-into-Your-Smile.jpg';

const ShowCard = () => {
  return (
    <div className='w-auto h-fit border bg-vev-secondary-light hover:scale-95 transform transition-transform duration-300 cursor-pointer dark:bg-vev-secondary-dark border-vev-primary-light dark:border-vev-primary-dark rounded-[12px]'>

      <div className='w-full h-[226px] relative'>
        <Image src={exampleThumb} alt='thumbnail' className='rounded-t-[12px]' fill/>
        <div className='absolute right-[12px] bottom-[6px] px-[12px] py-[6px] rounded-[6px] bg-[#00000050] backdrop-blur-[6px] font-semibold text-white'>EP42</div>
      </div>

      <div className='box-border pb-[24px] px-[14px] pt-[16px]'>
        <div className='text-[1.2rem] font-semibold'>Falling into Your Smile</div>
        <div className=''>This is the Drama Description more than about </div>
      </div>

    </div>
  )
}

export default ShowCard