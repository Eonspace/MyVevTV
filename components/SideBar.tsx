
import React, { useEffect, useState } from 'react';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


const SideBar = () => {

  const [page, setPage] = useState("home");

  const pathname = usePathname();
  const searchParams = useSearchParams()

  useEffect(()=>{

    if (pathname == "/") {
      setPage("home");
    } else if (pathname == "/explore") {
      setPage("explore");
    } else if (pathname == "/history") {
      setPage("history");
    } else if (pathname == "/collection") {
      setPage("collection");
    }else if (pathname == "/profile"){
      setPage("profile");
    }

  },[pathname, searchParams]);

  const router = useRouter();

  const navigateToHomePage = ()=>{router.push('/', {scroll: true});};
  const navigateToExplorePage = ()=>{router.push('/explore', {scroll: true});};
  const navigateToHistoryPage = ()=>{router.push('/history', {scroll: true});};
  const navigateToCollectionPage = ()=>{router.push('/collection', {scroll: true});};
  const navigateToProfilePage = ()=>{router.push('/profile', {scroll: true});};


  return (
    <div className='w-fit h-full  box-border p-[16px]'>
        <div className='w-full h-fit pb-[50px] flex flex-col gap-[16px] bg-vev-secondary-light dark:bg-vev-secondary-dark border-vev-primary-light dark:border-vev-primary-dark border dark: rounded-[12px] box-border px-[8px] py-[24px]'>

          <div onClick={navigateToHomePage} className={`${'flex flex-col items-center cursor-pointer  gap-[2px]  w-full box-border py-[6px] px-[12px] rounded-[12px] '} ${page==="home"?'text-rose-600':'hover:border-vev-primary-light border-[#0000] border hover:bg-white dark:hover:bg-vev-primary-dark dark:hover:border-vev-primary-dark'}`}>
            <div className='pb-[4px] dark:text-white'><LiveTvIcon className=' w-[24px] h-[24px]'/></div>
            <div className='text-[0.7rem] dark:text-white font-medium'>Watch</div>
          </div>

          <div onClick={navigateToExplorePage} className={`${'flex flex-col items-center cursor-pointer  gap-[2px]  w-full box-border py-[6px] px-[12px] rounded-[12px] '} ${page==="explore"?'text-rose-600':'hover:border-vev-primary-light border-[#0000] border hover:bg-white dark:hover:bg-vev-primary-dark dark:hover:border-vev-primary-dark'}`}>
            <div className='pb-[4px] dark:text-white'><ExploreOutlinedIcon className=' w-[24px] h-[24px]'/></div>
            <div className='text-[0.7rem] dark:text-white font-medium'>Explore</div>
          </div>

          <div onClick={navigateToHistoryPage} className={`${'flex flex-col items-center cursor-pointer  gap-[2px]  w-full box-border py-[6px] px-[12px] rounded-[12px] '} ${page==="history"?'text-rose-600':'hover:border-vev-primary-light border-[#0000] border hover:bg-white dark:hover:bg-vev-primary-dark dark:hover:border-vev-primary-dark'}`}>
            <div className='pb-[4px] dark:text-white'><HistoryIcon className=' w-[24px] h-[24px]'/></div>
            <div className='text-[0.7rem] dark:text-white font-medium'>History</div>
          </div>

          <div onClick={navigateToCollectionPage} className={`${'flex flex-col items-center cursor-pointer  gap-[2px]  w-full box-border py-[6px] px-[12px] rounded-[12px] '} ${page==="collection"?'text-rose-600':'hover:border-vev-primary-light border-[#0000] border hover:bg-white dark:hover:bg-vev-primary-dark dark:hover:border-vev-primary-dark'}`}>
            <div className='pb-[4px] dark:text-white'><VideoLibraryOutlinedIcon className=' w-[24px] h-[24px]'/></div>
            <div className='text-[0.7rem] dark:text-white font-medium'>Collection</div>
          </div>
          
        

        </div>
    </div>
  )
}

export default SideBar