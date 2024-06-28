import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import HowItWorks from './HowItWorks'
import EasyRegistration from './EasyRegistration'
import DownloadApp from './DownloadApp'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <>
    <Navbar/>
    <HowItWorks/>
    <EasyRegistration/>
    <DownloadApp/>
    <Footer/>
    </>
  )
}
