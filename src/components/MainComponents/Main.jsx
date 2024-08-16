import React from 'react'
import { Aside } from '../OptionalComponents/Aside'
import { Articles } from '../OptionalComponents/Article/Articles'
import { Header } from './Header'
import { Footer } from './Footer'

export const Main = () => {
  return (
   <>
    <Header />
     <main className='grid grid-cols-4 justify-center items-center content-center main-media'>
        <Articles />
        <Aside />
    </main>
    <Footer />
   </>
  )
}
