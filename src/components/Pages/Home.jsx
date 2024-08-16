import React from 'react'
import { Header } from '../MainComponents/Header'
import { Footer } from '../MainComponents/Footer'
import { Button } from '../OptionalComponents/Button'
import articlesCollection from '../OptionalComponents/Article/articlesCollection'

export const Home = () => {
  localStorage.setItem('articlesCollection', JSON.stringify(articlesCollection))
  return (
    <>
        <Header />
        <main className='my-5 flex items-center flex-col justify-center gap-4 h-[90vh]'>
            <h1 className='text-center text-4xl'>Welcome to my simple page with article for diferrent themes</h1>
            <Button to={'news'}>Read articles</Button>
        </main>
        <Footer />
    </>
  )
}
