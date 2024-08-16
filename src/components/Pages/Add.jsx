import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import articlesCollection from '../OptionalComponents/Article/articlesCollection';
import { useNavigate } from 'react-router-dom';
import { Header } from '../MainComponents/Header'
import { Footer } from '../MainComponents/Footer'

export default function Add() {
  const nav = useNavigate()
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      theme: '',
      articles: [
        {
          title: '',
          image: '',
          date: '',
          alt: '',
          description: ''
        }
      ]
    }
  });

  const { fields } = useFieldArray({
    control,
    name: 'articles'
  });

  const onSubmit = (data) => {
    articlesCollection.map(articles => {
        if (articles.theme === data.theme) {
          articles.articles.push(data.articles[0]);
        }
    })
    localStorage.setItem('articlesCollection', JSON.stringify(articlesCollection))
    nav(-1);
  };

  return (
  <>  
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 max-w-lg mx-auto border border-gray-300 rounded-lg h-[100vh] my-2">
      <h2 className="text-lg font-semibold mb-4">Add a New Article</h2>

      <label htmlFor="theme">Theme</label>
      <select id="theme" {...register('theme', { required: true })} className=" p-2 border border-gray-300 rounded">
        <option value="">Select Theme</option>
        <option value="WebDev">Web Development</option>
        <option value="GameDev">Game Development</option>
        <option value="Software">Software</option>
      </select>
      {errors.theme && <p className="text-red-500 text-sm">This field is required.</p>}

      {fields.map((item, index) => (
        <div key={item.id} className="border-t border-gray-300 pt-4 mt-4">
          <label htmlFor={`articles.${index}.title`}>Title</label>
          <input id={`articles.${index}.title`} {...register(`articles.${index}.title`, { required: true })} className=" p-2 border border-gray-300 rounded w-full" />
          {errors.articles?.[index]?.title && <p className="text-red-500 text-sm">This field is required.</p>}

          <label htmlFor={`articles.${index}.image`}>Image URL</label>
          <input id={`articles.${index}.image`} {...register(`articles.${index}.image`, { required: true })} className=" p-2 border border-gray-300 rounded w-full" />
          {errors.articles?.[index]?.image && <p className="text-red-500 text-sm">This field is required.</p>}

          <label htmlFor={`articles.${index}.date`}>Date</label>
          <input type="date" id={`articles.${index}.date`} {...register(`articles.${index}.date`, { required: true })} className=" p-2 border border-gray-300 rounded w-full" />
          {errors.articles?.[index]?.date && <p className="text-red-500 text-sm">This field is required.</p>}

          <label htmlFor={`articles.${index}.alt`}>Alt Text</label>
          <input id={`articles.${index}.alt`} {...register(`articles.${index}.alt`, { required: true })} className=" p-2 border border-gray-300 rounded w-full" />
          {errors.articles?.[index]?.alt && <p className="text-red-500 text-sm">This field is required.</p>}

          <label htmlFor={`articles.${index}.description`}>Description</label>
          <textarea id={`articles.${index}.description`} {...register(`articles.${index}.description`, { required: true })} className=" p-2 border border-gray-300 rounded w-full" />
          {errors.articles?.[index]?.description && <p className="text-red-500 text-sm">This field is required.</p>}

        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
        Add Article
      </button>
      </form>
      <Footer />
  </>
  );
}
