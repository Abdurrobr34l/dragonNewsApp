import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ newsByCategory }) => {
  return (
    <>
      <div>
        {newsByCategory.map((news) => (
          <div className="mt-10 first:mt-0 border border-base-300 rounded-lg">
            {/* Author & Share */}
            <div className="flex items-center justify-between p-7 py-4 bg-base-300 rounded-t-lg">
              {/*//? Author */}
              <div className="flex items-center gap-3">
                {/*//? Author Image */}
                <div>
                  <img
                    src={news.author.img}
                    alt="It is author image of this blog"
                    className="size-20 rounded-full"
                  />
                </div>

                {/*//? Author Name */}
                <div>
                  <p className="text-xl font-bold text-primary">
                    {news.author.name}
                  </p>
                  <p className="text-primary">{news.author.published_date}</p>
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

            {/* Contents */}
            <div className="p-7 pt-5">
              {/* Title */}
              <h2 className="my-5 text-2xl font-bold text-primary">
                {news.title}
              </h2>

              {/* Image */}
              <img
                src={news.image_url}
                alt="It is news image"
                className="w-full rounded-lg"
              />

              {/* Description & Button */}
              <div className="mt-12">
                <p className="text-lg">{news.details}</p>
                <Link className="btn btn-ghost btn-primary mt-2 p-0 text-md font-bold border-none hover:text-accent hover:bg-transparent hover:border-none hover:shadow-none">
                  Read More
                </Link>
              </div>

              <hr className="my-5 text-base-300" />

              {/* Rating & View */}
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsCard;
