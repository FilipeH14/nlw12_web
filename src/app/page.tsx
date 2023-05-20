import { User } from 'lucide-react'

import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'


import { Hero } from '@/components/Hero'
import { SingIn } from '@/components/SignIn'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Copyright } from '@/components/Copyright'


export default function Home() {
  return (
    <main className='grid grid-cols-2 min-h-screen'>
      {/* left */}
      <div className='relative flex flex-col bg-[url(../assets/bg-stars.svg)] items-start justify-between px-28 py-16 border-r border-white/10 overflow-hidden'>
        {/* blur */}
        <div className='absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full' />
        {/* stripes */}
        <div className='absolute bottom-0 right-2 top-0 w-2 bg-stripes' />

        <SingIn />

        <Hero />
        
        <Copyright />

      </div>

      {/* right */}
      <div className='flex flex-col bg-[url(../assets/bg-stars.svg)] p-16'>
        <EmptyMemories />
      </div>

    </main>
  )
}
