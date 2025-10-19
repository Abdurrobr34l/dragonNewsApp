import React from 'react';

const NewsCard = ({newsByCategory}) => {
  return (
    <div>
      {
        console.log("from NewsCard", newsByCategory)
      }
      <div className='mt-5'>{newsByCategory.length}</div>
    </div>
  );
};

export default NewsCard;