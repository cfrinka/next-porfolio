import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen py-4 px-12 bg-[#121212]">
      <Navbar/>
      <container className='container px-12 py-4 mx-auto mt-24'>
      <HeroSection/>
      </container>
    </main>
  )
}
