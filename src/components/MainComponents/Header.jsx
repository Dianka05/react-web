import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='flex justify-around items-center w-full border-b-2 border-[#201E43] text-center p-2 h-full'>
        <span className='hover:animate-wiggle grow font-bold text-[#201E43]'>News website</span>
        <nav className='grow h-full p-2'>
            <ul className='flex justify-around items-center h-full'>
                <li className='border-b-2 border-b-transparent hover:animate-showBorder h-full '><Link to={`/`}>Home</Link></li>
                <li className='border-b-2 border-b-transparent hover:animate-showBorder h-full'><Link to={`/news`}>News</Link></li>
                <li className='border-b-2 border-b-transparent hover:animate-showBorder h-full flex items-center gap-1 justify-start'><img src="https://img.icons8.com/ios/50/plus--v1.png" alt="plus" className='w-[20px]' /><Link to={'/add'}>Add Article</Link></li>
            </ul>
        </nav>
    </header>
  )
}
