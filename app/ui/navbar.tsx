import React from 'react'
import { ModeToggle } from './fun/mode-toggle'
import { Rabbit } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
<nav className='p-3 mx-auto max-w-screen-xl flex justify-between items-center'>
    <div className='flex gap-5'><h1 className=' text-3xl font-bold'>ji<span className='text-primary'>Kane</span></h1></div>
    <div className='hidden  md:block'>
    <ul className='flex gap-3 '>
        <li className=' text-primary'><Link href='/'>home</Link></li>
        <li className='font-semibold'><Link href='/'>Generated</Link></li>
        <li className='font-semibold'><Link href='/'>home</Link></li>
        <li className='font-semibold'><Link href='/'>home</Link></li>
    </ul>
    </div>
    
    <ModeToggle/>
</nav>  )
}

export default Navbar