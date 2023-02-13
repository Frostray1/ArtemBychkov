import { Col, Row } from "react-bootstrap";
import React from "react";
// import { useTranslation } from "react-i18next";
// import translationKeys from "../../translations";

const LandingCard = (props) => {
  // const { t } = useTranslation();

  return (
    <Row>
      <div className="blockCardLanding">
        <img src={props.item.imgLink} alt="logo" />
        <Row className="blockCardLanding__Links">
          <Col>
            <a target="_blank" rel="noreferrer" href={props.item.siteLink}>
              <i className="bi bi-globe2"></i>
            </a>
          </Col>
          <Col>
            <a target="_blank" rel="noreferrer" href={props.item.githubLink}>
              <i className="bi bi-github"></i>
            </a>
          </Col>
        </Row>

        {/* <Col>
          <div className="blockCard__info">
            <h3>{props.item.title}</h3>

            <p>{t(props.item.info)}</p>
            <Row className="mt--0 blockCard__links">
              <Col>
                <a
                  className="linkSite"
                  href={props.item.siteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(translationKeys.BUTTON)}
                </a>
              </Col>
              <Col>
                <a
                  className="linkGithub"
                  target="_blank"
                  rel="noreferrer"
                  href={props.item.githubLink}
                >
                  <i className="bi bi-github"></i>
                </a>
              </Col>
            </Row>
          </div>
        </Col> */}
      </div>
    </Row>
  );
};

export default LandingCard;
