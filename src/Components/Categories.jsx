import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then((response) =>
  response.json()
)

const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories);

  return (
    <div>
      <h2 className='font-semibold'>All Categories ({categories.length})</h2>

      <ul className='mt-5 categories-ul'>
        {
          categories.map(({id, name}) => (
            <li key={id}>
              <NavLink to={`/category/${id}`} className='btn btn-primary justify-start py-6 font-semibold w-full bg-transparent text-primary border-none shadow-none hover:bg-base-200'>{name}</NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Categories;
