import { Col, Row } from "react-bootstrap";
import React from "react";

const LybraryCard = (props) => {
  console.log(props.item.info);
  //   <h5>{props.item.name}</h5>
  return (
    <div className="blockCard">
      <Row>
        <Col>
          <img src={props.item.imgLink} alt="logo" />
        </Col>
        <Col>
        <div className="blockCard__info">
          <h3>{props.item.title}</h3>
          
          <p>
            {props.item.info}
          </p>
          <Row className="blockCard__links">
          <Col >
            <a className="linkSite" href={props.item.siteLink} target="_blank" rel="noreferrer">Потыкать проект</a>
            </Col> 
            <Col >
            <a className="linkGithub" target="_blank" rel="noreferrer" href={props.item.githubLink}>
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
