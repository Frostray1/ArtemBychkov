import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";

const Contacts = () => {
  return (
    <Row className="Contacts">
      <Row className="Contacts__Info">
        <button className="button__Email">
          <a
            className="CarouselBlock__linkSite"
            href="mailto:a.bychkoff1@yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            a.bychkoff1@yandex.ru
          </a>
          
          
        </button>
        <a
            className="CarouselBlock__linkSiteIcon"
            href="mailto:a.bychkoff1@yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail/>
          </a>
      </Row>
      <Col className="LinkIcon">
        <a target="_blank" rel="noreferrer" href="https://t.me/frostray1">
          <RiTelegramLine />
        </a>
      </Col>
      <Col className="LinkIcon">
        <a target="_blank" rel="noreferrer" href="https://vk.com/frostray1">
          <SlSocialVkontakte />
        </a>
      </Col>
      <Col className="LinkIcon">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/artem-bychkov-24b111252"
        >
          <AiOutlineLinkedin />
          
        </a>
      </Col>
      <Col className="LinkIcon">
        <a target="_blank"
          rel="noreferrer"
          href="https://github.com/Frostray1">
        <AiOutlineGithub />
        </a>
      </Col>
      <Row className="contacts__Number">
        <a  href="tel:89883404502">+7 988 340-45-02</a>
      </Row>
    </Row>
  );
};

export default Contacts;
