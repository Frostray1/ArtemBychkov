import { Col, Row } from "react-bootstrap";
import React from "react";
import { useTranslation } from "react-i18next";
import translationKeys from "../translations";

const CarouselBlockItem = (props) => {
  const { t } = useTranslation();

  return (
    <div className="CarouselBlockCard">
      <Row>
        <img src={props.item.imgLink} alt="logo" />
      </Row>
      <Row>
      <div className="CarouselBlock__info">
            <h3>{props.item.title}</h3>

            <p>{t(props.item.info)}</p>
            <Row className="CarouselBlock__links">
              <Col>
                <a
                  className="CarouselBlock__linkSite"
                  href={props.item.siteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(translationKeys.BUTTON)}
                </a>
              </Col>
              <Col>
                <a
                  className="CarouselBlock__linkGithub"
                  target="_blank"
                  rel="noreferrer"
                  href={props.item.githubLink}
                >
                  <i className="bi bi-github"></i>
                </a>
              </Col>
            </Row>
          </div>
      </Row>
      
      <Row>
  
      </Row>
      {/* <Col>
          
        </Col> */}
    </div>
  );
};

export default CarouselBlockItem;
