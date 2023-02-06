import { Col, Row } from "react-bootstrap";
import React from "react";

const LybraryCard = (props) => {
  console.log({ props });
  //   <h5>{props.item.name}</h5>
  return (
    <div className="blockCard">
      <Row>
        <Col>
          <img src={props.item.imgLink} alt="" />
        </Col>
        <Col>
        <div className="blockCard__info">
          <h3>{props.item.title}</h3>
          <p>
            {props.item.info}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum adipisci alias quisquam delectus, officia voluptates voluptate voluptas recusandae eligendi eaque illo magni inventore consequuntur velit exercitationem dicta magnam. Possimus.
          </p>
          <Row className="blockCard__links">
          <Col >
            <a className="linkSite" href={props.item.siteLink} target="_blank" rel="noreferrer">Потыкать проект</a>
            </Col> 
            <Col >
            <a className="linkGithub" href="">
              <i className="bi bi-github"></i>
            </a>
            </Col> 
          </Row>
        </div>
        </Col>
      </Row>
    </div>
  );
};

export default LybraryCard;
