import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокручивает страницу в самый верх
      }, []);
    
  return (
    <div className="pb-5 text-center">
      <Link to="/mini-projects">
        <button className="button__miniProjects">{name}</button>
      </Link>
    </div>
  );
};

export default Button;
