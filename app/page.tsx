'use client'
import ContentAreaDesign from '@/components/ContentAreaDesign';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import ComingSoon from '@/components/System/ComingSoon';
import MaintenancePage from '@/components/System/MaintenancePage';
import ThemeToggleSwitch from '@/components/ThemeToggleSwitch'
import UserScorePannle from '@/components/UserScorePannle';
import { ThemeProvider } from '@/context/ThemeContext';
import Image from 'next/image'
import { useState } from 'react';

type SystemUpdateOptions = 'maintain' | 'deploy' | 'coming soon';


export default function Home() {
  const [systemUpdate, setSystemUpdate] = useState<SystemUpdateOptions>('deploy');


  return (

    <>
      {systemUpdate === 'maintain' ?
        <main >
          <MaintenancePage />
        </main>
        : systemUpdate === 'coming soon' ?
          <main >
            <ComingSoon />
          </main>
          :
          <ThemeProvider>
          <main className="flex min-h-screen  flex-col items-center dark:bg-black  bg-icx-primary dark:bg-icx-primary-dark overflow-hidden">
          <NavBar/>
          <div className='content-body-height w-full flex'>
            <SideBar/>
            <ContentAreaDesign/>
            <UserScorePannle/>
          </div>
           <ThemeToggleSwitch/>

          

          </main>
          </ThemeProvider>
      }
    </>

  )
}
