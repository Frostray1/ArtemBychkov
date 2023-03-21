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
import { Link } from "react-scroll";
import { BiHomeSmile } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";
import { AiOutlineLayout } from "react-icons/ai";
import { GiClassicalKnowledge } from "react-icons/gi";
import { AiOutlineContacts } from "react-icons/ai";
import ParticlesBackground from "../../Components/ParticlesBackground/ParticlesBackground";



const Home = () => {
  // React.useEffect(() => {
  //   // Запрещаем прокрутку колесом мыши
  //   const preventScroll = e => e.preventDefault();
  //   document.addEventListener('wheel', preventScroll, { passive: false });

  //   // Запрещаем прокрутку на сенсорных устройствах
  //   const preventTouchScroll = e => e.preventDefault();
  //   document.addEventListener('touchmove', preventTouchScroll, { passive: false });

  //   // Удаляем обработчики событий при размонтировании компонента
  //   return () => {
  //     document.removeEventListener('wheel', preventScroll);
  //     document.removeEventListener('touchmove', preventTouchScroll);
  //   };
  // }, []);

  useEffect(() => {
    new WOW().init();
  }, []);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    language ? i18n.changeLanguage("en") : i18n.changeLanguage("ru");
  };

  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (to) => {
    console.log(to);
    setActiveLink(to);
  };

  return (
    <>
   
    <Container>
    <ParticlesBackground/>
      <nav>
        <ul>
          <li className={activeLink === "Welcome" ? "active" : ""}>
            <Link
              to="Welcome"
              smooth={true}
              spy={true}
              duration={150}
              onSetActive={() => handleSetActive("Welcome")}
              onClick={() => handleSetActive("Welcome")}
            >
              <BiHomeSmile />
              <p className="navigation-text">{t(translationKeys.MAIN)}</p>
            </Link>
            
          </li>
          <li className={activeLink === "Library" ? "active" : ""}>
            <Link
              to="Library"
              smooth={true}
              spy={true}
              duration={150}
              onSetActive={() => handleSetActive("Library")}
              onClick={() => handleSetActive("Library")}
            >
              <IoLibraryOutline />
              <p className="navigation-text">{t(translationKeys.LIBRARY)}</p>
            </Link>
            
          </li>
          <li className={activeLink === "Layout" ? "active" : ""}>
            <Link
              to="Layout"
              smooth={true}
              spy={true}
              duration={150}
              onSetActive={() => handleSetActive("Layout")}
              onClick={() => handleSetActive("Layout")}
            >
              <AiOutlineLayout />
              <p className="navigation-text">{t(translationKeys.LAYOUT)}</p>
            </Link>
           
          </li>
          <li className={activeLink === "Skills" ? "active" : ""}>
            <Link
              to="Skills"
              smooth={true}
              spy={true}
              duration={150}
              onSetActive={() => handleSetActive("Skills")}
              onClick={() => handleSetActive("Skills")}
            >
              <GiClassicalKnowledge />
              <p className="navigation-text">{t(translationKeys.SKILLS)}</p>
            </Link>
           
          </li>
          <li className={activeLink === "Contacts" ? "active" : ""}>
            <Link
              to="Contacts"
              smooth={true}
              spy={true}
              duration={150}
              onSetActive={() => handleSetActive("Contacts")}
              onClick={() => handleSetActive("Contacts")}
            >
              <AiOutlineContacts />
               <p className="navigation-text">{t(translationKeys.CONTACTS)}</p>
            </Link>
           
          </li>
        </ul>
      </nav>
      <Row className="pt-3" id="Welcome">
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
      <Row id="Library">
        <h1 className="wow animate__fadeInUp myLibrary">
          {t(translationKeys.LIBRARY)}
        </h1>
        <UncontrolledExample />
      </Row>
      <Row className="wow animate__fadeInUp ">
       
        
      </Row>
      <Row id="Layout">
        <h1 className="wow animate__fadeInUp myLibrary">
          {t(translationKeys.LAYOUT)}
        </h1>
      </Row>
      <Row id="landingCardItem">
        <Col className="wow animate__fadeInUp libraryCard">
          <LandingCard item={card[4]} />
        </Col>
        <Col className="wow animate__fadeInUp libraryCard">
          <LandingCard item={card[5]} />
        </Col>
      </Row>
      <Row id="Skills">
        <h1 className="wow animate__fadeInUp myLibrary">
          {t(translationKeys.MYSKILLS)}
        </h1>
        <MySkills className="wow animate__fadeInUp myLibrary" />
      </Row>
      <Row id="Contacts">
        <h1 className="wow animate__fadeInUp myLibrary">
          {t(translationKeys.CONTACTS)}
        </h1>
      </Row>
      <Row>
        <Contacts />
      </Row>
    </Container>
    </>
  );

};


export default Home;
