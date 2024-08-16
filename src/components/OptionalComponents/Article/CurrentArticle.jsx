import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../Button';

export default function CurrentArticle() {
  const { articleId } = useParams();
  const getId = parseInt(articleId.split('-')[0]);
  const getTheme = articleId.replace(/^\d+-/, '');
  const getArcticles = JSON.parse(localStorage.getItem('articlesCollection'))

  return (
   <>
    <main className="z-50 flex items-center flex-col w-full justify-center bg-[#201E43] h-[100vh]">
    {getArcticles.map((article) => {
      if (article.theme === getTheme) {
        const thisArticle = article.articles[getId];
        if (thisArticle) {
          return (
            <article
              key={thisArticle}
              className="animate-show text-center rounded-md bg-white border mt-3 border-gray-500 p-2 flex flex-col items-center justify-between gap-5 w-[75%]"
            >
              <img src={thisArticle.image} alt={thisArticle.alt} className='rounded' />
              <h2 className='text-3xl'>{thisArticle.title}</h2>
              <p>{thisArticle.date}</p>
              <p>{thisArticle.description}</p>
              <Button to={'./..'}>Go back</Button>
            </article>
          );
        }
      }
      return null;
    })}
  </main>
   </>
  );
}
