import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/img1.webp";
import menu2 from "../assets/img/menu2.png";
import menu3 from "../assets/img/menu3.jpeg";

const Menu = () => {
  return (
    <div  name = "premium" id="premium" className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium items
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Hand written notes" price="$1.99" />
        <DishesCard img={menu2} title="Project Develop..." price="$1.99" />
        <DishesCard img={menu3} title="Recorder lec..." price="$1.99" />
      </div>
    </div>
  );
};

export default Menu;
