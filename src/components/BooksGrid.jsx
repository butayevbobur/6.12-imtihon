import React from "react";
import useCollection from "../hooks/useCollection";
import useGlobalContext from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
function BooksGrid() {
  let { data } = useCollection();

  return (
    <>
      <ul className="lg:grid-cols-3 grid grid-cols-2   md:grid-cols-2">
        {data &&
          data.map((dish, id) => {
            return (
              <li
                key={id}
                className="card w-96 border  bg-base-100 shadow-xl m-10 md:w-96  "
              >
                <figure className="">
                  <img
                    className=" h-72 pt-2 object-fill  rounded-md border-b-2 border-r-2 border-cyan-400"
                    src={dish.image}
                    alt="dish"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title flex justify-between items-baseline ">
                    {dish.name}
                  </h2>
                  <p className="line-clamp-2 mb-2">{dish.description}</p>
                  <div className="flex gap-10 items ">
                    <span className=" "> Time: {dish.time}</span>
                  </div>
                  <div className="card-actions justify-start line-clamp-3">
                    <p className="bg-transparent">
                      Ingredients: {dish.Ingredients}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default BooksGrid;
