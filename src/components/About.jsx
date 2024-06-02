import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div name="about" id="about" className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div  className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          Your satisfaction is our priority. We tailor our services to meet your
          specific needs and preferences. Our dedicated support team is always
          here to assist you and ensure a smooth and pleasant experience from
          start to finish.
        </p>
        <p>
          With over years of experience in the industry, our team of skilled
          professionals brings a wealth of knowledge and expertise to every
          project. We stay updated with the latest trends and technologies to
          ensure you receive top-notch service.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
