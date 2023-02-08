import React, { useEffect } from "react";
import { Switch } from "antd";

import { Col, Container, Row } from "react-bootstrap";
import WOW from "wow.js";
import LybraryCard from "../../Components/LybraryCard";
import { card } from "../../listLibrary";
import { useTranslation } from "react-i18next";
import LandingCard from "../../Components/LandingCard";
import translationKeys from "../../translations";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const Home = () => {
  useEffect(() => {
    new WOW().init();
  }, []);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    language ? i18n.changeLanguage("en") : i18n.changeLanguage("ru");

    // i18n.changeLanguage(language);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <div className="links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Frostray1"
            >
              <i className="bi bi-github"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://t.me/frostray1">
              <i className="bi bi-telegram"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/artem-bychkov-24b111252"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </Col>
        <Col>
          <div className="langAndThemes">
            <h5>Eng</h5>
            <Switch className="switch" onChange={changeLanguage} />
          </div>
        </Col>
      </Row>
      <Row className="welcomeContent">
        <Col className="textContainer">
          <div className="container">
            <h1 className="welcomeText_1">{t(translationKeys.WELCOME)}</h1>
            <h2 className="welcomeText_2">Меня зовут Артем</h2>
            <h3 className="welcomeText_3"> Здесь представлены мои работы</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="wow animate__fadeInUp myLibrary">Библиотека</h1>
        </Col>
      </Row>
      <Row>
        <Col className="wow animate__backInLeft libraryCard">
          <LybraryCard item={card[0]} />
        </Col>
      </Row>
      <Row>
        <Col className="wow animate__backInRight libraryCard">
          <LybraryCard item={card[1]} />
        </Col>
      </Row>
      <Row>
        <Col className="wow animate__backInLeft libraryCard">
          <LybraryCard item={card[2]} />
        </Col>
      </Row>
      <Row>
        <Col className="wow animate__backInRight libraryCard">
          <LybraryCard item={card[3]} />
        </Col>
      </Row>

      <Row>
        <h1 className="wow animate__fadeInUp myLibrary">Верстка</h1>
      </Row>
      <Row>
        <Col className="wow animate__fadeInUp ">
          <LandingCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
