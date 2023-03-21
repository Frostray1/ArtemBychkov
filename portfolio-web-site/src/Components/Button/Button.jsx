import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
    
  return (
    <div className="button_link text-center">
      <Link to="/mini-projects">
        <button  onClick={handleClick} className="button__miniProjects">{name}</button>
      </Link>
    </div>
  );
};

export default Button;
