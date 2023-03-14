import React from "react";

import { Link } from "react-scroll";

const MiniProjects = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="block1" smooth={true} duration={200}>
              Блок 1
            </Link>
          </li>
          <li>
            <Link to="block2" smooth={true} duration={300}>
              Блок 2
            </Link>
          </li>
          <li>
            <Link to="block3" smooth={true} duration={500}>
              Блок 3
            </Link>
          </li>
        </ul>
      </nav>
      <div id="block1" className="block">
        <h1>Блок 1</h1>
        <p>Текст блока 1</p>
      </div>
      <div id="block2" className="block">
        <h1>Блок 2</h1>
        <p>Текст блока 2</p>
      </div>
      <div id="block3" className="block">
        <h1>Блок 3</h1>
        <p>Текст блока 3</p>
      </div>
    </div>
  );
};

export default MiniProjects;
