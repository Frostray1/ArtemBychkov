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
        <div className="hoverText">
          <Row className="CarouselBlock__Links">
            <Col>
              <button className="button__LinkSite">
                <a
                  className="CarouselBlock__linkSite"
                  href={props.item.siteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(translationKeys.BUTTON)}
                </a>
              </button>
              <a
                className="CarouselBlock__IconLinkSite"
                target="_blank"
                rel="noreferrer"
                href={props.item.siteLink}
              >
                <i className="bi bi-globe2"></i>
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
    </div>
  );
};

export default CarouselBlockItem;
