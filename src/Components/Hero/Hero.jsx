import React from "react";
import "./Hero.css";
import profile_img from "../../assets/my-profile.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" style={{
        width: '300px',
        height: '300px',
        borderRadius: '50%'
      }} />
      <h1><span>I'm Ahmed Hamwi,<br /></span> Full-stack developer</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
        earum ipsa? Asperiores, veniam esse omnis dolor eaque consectetur, nobis
        atque quisquam, ut laudantium labore ipsum illo quis sed suscipit sunt?
      </p>
      <div className="hero-action">
        <div className="hero-connect">Contact Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
