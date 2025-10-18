import React, { use } from 'react';
import { Link } from 'react-router';

const categoryPromise = fetch("/categories.json").then((response) =>
  response.json()
)

const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories);

  return (
    <div>
      <h2 className='font-semibold'>All Categories ({categories.length})</h2>

      <ul className='mt-3'>
        {
          categories.map(({id, name}) => (
            <li key={id}>
              <Link className='btn btn-primary py-6 w-full bg-transparent text-primary border-none shadow-none hover:bg-base-200'>{name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Categories;
