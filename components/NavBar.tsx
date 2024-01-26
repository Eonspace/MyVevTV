import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
  return (
    <div className='w-full h-[80px] border-b border-vev-primary-light dark:border-vev-primary-dark bg-vev-secondary-light dark:bg-vev-secondary-dark flex flex-col items-center justify-center'>
      <div className='w-full flex items-center  justify-between box-border px-[24px]'>
        
        <div className='w-1/6'>
          <div className='text-[1.5rem] font-bold dark:text-white'>MyVevTV</div>
        </div>

        <div className='w-2/6 flex items-center'>
          <input type="text" className='border rounded-l-full h-[40px] w-full px-[24px] text-[0.9rem] focus:outline-gray-600 dark:bg-black dark:text-white border-vev-primary-light dark:border-vev-primary-dark ' placeholder='Search Shows'/>
          <button className='h-[40px] w-[60px] rounded-r-full border border-l-0 dark:border-vev-primary-dark bg-vev-secondary-light dark:bg-vev-secondary-dark flex justify-center items-center dark:text-[#ffffffa5] text-[#000000b5]'><SearchIcon/></button>
        </div>

        <div className='w-1/6 flex items-center justify-end'>
          <div className='w-[30px] h-[30px] rounded-full border  dark:border-vev-primary-dark'>

          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar