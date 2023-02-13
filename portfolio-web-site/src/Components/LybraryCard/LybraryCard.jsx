import { Col, Row } from "react-bootstrap";
import React from "react";
import { useTranslation } from "react-i18next";
import translationKeys from "../../translations";

const LybraryCard = (props) => {
  const { t } = useTranslation();

  return (
    <div className="blockCard">
      <Row>
        <Col>
          <img src={props.item.imgLink} alt="logo" />
        </Col>
        <Col>
          <div className="blockCard__info">
            <h3>{props.item.title}</h3>

            <p>{t(props.item.info)}</p>
            <Row className="blockCard__links">
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
        </Col>
      </Row>
    </div>
  );
};

export default LybraryCard;
