'use client'
import ContentAreaDesign from '@/components/ContentAreaDesign'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import ThemeToggleSwitch from '@/components/ThemeToggleSwitch'
import UserScorePannle from '@/components/UserScorePannle'
import { ThemeProvider } from '@/context/ThemeContext'

import React from 'react'

const Profile = () => {
  return (
    <div>
      <ThemeProvider>
          <div className="flex min-h-screen  flex-col items-center dark:bg-black  bg-icx-primary dark:bg-icx-primary-dark overflow-hidden">
          <NavBar/>
          <div className='content-body-height w-full flex'>
            <SideBar/>
            <ContentAreaDesign/>
            <UserScorePannle/>
          </div>
           <ThemeToggleSwitch/>

          

          </div>
          </ThemeProvider>
    </div>
  )
}

export default Profile