import React from 'react';
import { Divider } from '../Divider.jsx';
import { Link } from 'react-router-dom';

export const Articles = () => {

  const getArcticles = JSON.parse(localStorage.getItem('articlesCollection'))
  return (
    <>
    {getArcticles.map(({ articles, theme }, index) => {
      return (
        <section className='grid grid-cols-3 justify-items-center gap-1 col-span-3 animate-showDelay section-media' key={index}>
          <Divider title={theme} />
          {articles.map((article, index) => {
            return (
             <Link to={`${index + "-" + theme}`} key={index} id={index + "-" + theme}>
               <article
                className="rounded-lg hover:animate-scale border h-full border-gray-300 p-4 flex flex-col items-center gap-4 shadow-md "
              >
                <img src={article.image} alt={article.alt}className="h-52 sm:h-48 w-full rounded-lg object-cover"/>
                <div>
                <span className="text-gray-500">{article.date}, {theme}</span>
                  <h3 className="font-bold text-[#201E43]">{article.title}</h3>
                </div>
                <p className="grow text-gray-700">{article.description}</p>
              </article>
             </Link>
            );
          })}
        </section>
      );
    })}
  </>
  
  );
};
