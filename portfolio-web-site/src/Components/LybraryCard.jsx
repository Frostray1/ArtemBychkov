import React from "react";

const LybraryCard = (props) => {
  console.log({ props });
  return (
    <div>
      <h5>{props.item.name}</h5>
      <img src={props.item.imgLink} alt="" />
      <div className="cardMenu">
        <a href="#">{props.item.siteLink}</a>
        <a href={props.item.githubLink}>
          <i className="bi bi-github"></i>
        </a>
        
      </div>
    </div>
  );
};

export default LybraryCard;
