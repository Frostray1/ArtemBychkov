import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import WOW from "wow.js";
import { card } from "../../listProjects";
import { useTranslation } from "react-i18next";
import LandingCard from "../../Components/LandigCard/LandingCard";
import translationKeys from "../../translations";
import UncontrolledExample from "../../Components/Carousel/Carousel";
import MySkills from "../../Components/MySkills/MySkills";
import Contacts from "../../Components/Contacts/Contacts";

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
            <h2 className="welcomeText_2">{t(translationKeys.MYNAME)}</h2>
            <h3 className="welcomeText_3"> {t(translationKeys.TEXTWORK)}</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <h1 className="wow animate__fadeInUp myLibrary">
          {t(translationKeys.LIBRARY)}
        </h1>
      </Row>
      <Row className="wow animate__fadeInUp ">
        <UncontrolledExample />
      </Row>
      <Row>
        <h1 className="wow animate__fadeInUp myLibrary">
          {t(translationKeys.LAYOUT)}
        </h1>
      </Row>
      <Row>
        <Col className="wow animate__fadeInUp libraryCard">
          <LandingCard item={card[4]} />
        </Col>
        <Col className="wow animate__fadeInUp libraryCard">
          <LandingCard item={card[5]} />
        </Col>
      </Row>
      <Row>
      <h1 className="wow animate__fadeInUp myLibrary">
          {t(translationKeys.MYSKILLS)}
        </h1>
      <MySkills className="wow animate__fadeInUp myLibrary"/>
      </Row>
      <Row>
      <h1 className="wow animate__fadeInUp myLibrary">
          {t(translationKeys.CONTACTS)}
        </h1>
      </Row>
      <Row>
        <Contacts/>
      </Row>
    </Container>
  );
};

export default Home;
