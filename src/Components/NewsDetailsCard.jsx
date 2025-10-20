import React from 'react';
import { FaRegBookmark, FaStar } from 'react-icons/fa';
import { IoEye, IoShareSocialOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsDetailsCard = ({newsItem}) => {
  
  return (
   <div className="my-10 first:mt-0 border border-base-300 rounded-lg">
            {/*//* Author & Share */}
            <div className="flex items-center justify-between p-7 py-4 bg-base-300 rounded-t-lg">
              {/*//? Author */}
              <div className="flex items-center gap-3">
                {/*//? Author Image */}
                <div>
                  <img
                    src={newsItem.author.img}
                    alt="It is author image of this blog"
                    className="size-20 rounded-full"
                  />
                </div>

                {/*//? Author Name */}
                <div>
                  <p className="text-xl font-bold text-primary">
                    {newsItem.author.name}
                  </p>
                  <p className="text-primary">{newsItem.author.published_date}</p>
                </div>
              </div>

              {/*//? Share */}
              <div className="flex gap-3">
                <button type="button" className="cursor-pointer">
                  <FaRegBookmark className="text-2xl text-primary" />
                </button>

                <button type="button" className="cursor-pointer">
                  <IoShareSocialOutline className="text-2xl text-primary" />
                </button>
              </div>
            </div>

            {/*//* Contents */}
            <div className="p-7 pt-5">
              {/*//? Title */}
              <h2 className="my-5 text-2xl font-bold text-primary">
                {newsItem.title}
              </h2>

              {/*//? Image */}
              <img
                src={newsItem.image_url}
                alt="It is news image"
                className="w-full rounded-lg"
              />

              {/*//? Description & Button */}
              <div className="mt-12">
                <p className="text-lg">{newsItem.details}</p>
                <Link to={`/category/${newsItem.category_id}`} className="btn btn-secondary mt-4 text-md font-bold border-none hover:text-accent hover:bg-transparent hover:border-none hover:shadow-none">
                  Back to categories
                </Link>
              </div>

              <hr className="my-5 text-base-300" />

              {/*//? Rating & View */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* 5 stars */}
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.round(newsItem.rating)
                          ? "text-gray-300"
                          : "text-orange-400"
                      }`}
                    />
                  ))}
                  {/* Rating Number */}
                  <span className="text-accent font-medium">
                    {newsItem.rating.number}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <IoEye className="text-2xl text-primary"/>
                  <p>{newsItem.total_view}</p>
                </div>
              </div>
            </div>
          </div>
  );
};

export default NewsDetailsCard;