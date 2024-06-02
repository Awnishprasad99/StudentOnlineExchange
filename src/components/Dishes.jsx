import React from "react";
import img1 from "../assets/img/img1.webp";
import img2 from "../assets/img/img2.avif";
import img3 from "../assets/img/img3.jpeg";
import img4 from "../assets/img/img4.jpeg";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.jpeg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div  name = "ourItems" id="ourItems" className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Items
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Semester notes"  />
        <DishesCard  img={img2} title="Semester books"  />
        <DishesCard img={img3} title="Semester tools" 
        />
        <DishesCard img={img4} title="College Uniform"  />
        <DishesCard img={img5} title="Used laptop"  />
        <DishesCard img={img6} title="Furniture"  />
      </div>
    </div>
  );
};

export default Dishes;
