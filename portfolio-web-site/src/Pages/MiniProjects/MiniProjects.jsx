import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Calc from "../../Components/Calc-Ios/Calc";
import ColorGenerate from "../../Components/Color-generate/ColorGenerate";
import ParticlesBackground from "../../Components/ParticlesBackground/ParticlesBackground";

import RandomQuote from "../../Components/RandomQuote/RandomQuote";

const MiniProjects = () => {
  return (
    <Container>
    <ParticlesBackground/>
      <Row className="pt-3" id="Welcome">
        <Col>
          <div className="links">
            <Link className="back" to="/">
              <i className="bi bi-arrow-left-circle"></i>
            </Link>
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
          {/* <div className="langAndThemes">
            <h5>Eng</h5>
            <Switch className="switch" onChange={changeLanguage} />
          </div> */}
        </Col>
      </Row>
      <Row className="colorGenerate">
        <Col>
          <ColorGenerate />
        </Col>
        <Col>
          <p className="description">
            <br></br>
            "Color Generator" - это компонент для генерации случайного
            цвета в формате HEX и его отображения на экране. Приложение
            использует React и состоит из одного компонента "ColorGenerate".
            Пользователь может нажать на кнопку "generate color" для генерации
            нового случайного цвета в формате HEX. Сгенерированный цвет
            отображается на экране в виде цветного прямоугольника и его
            значением в формате HEX. Пользователь также может скопировать
            значение сгенерированного цвета для дальнейшего использования.
            Приложение имеет стильный дизайн с помощью модулей CSS и может быть
            легко интегрировано в другие проекты React.
          </p>
        </Col>
      </Row>
      <Row className="colorGenerate">
        <Col>
          <p className="description">
            Компонент "RandomQuote" на React генерирует случайные цитаты из
            открытого API. Оно использует два API: один для получения цитат на
            английском языке, а другой для перевода этих цитат на русский язык
            (если пользователь включил перевод). Пользователь может
            сгенерировать новую цитату и включить или выключить перевод с
            помощью переключателя.{" "}
          </p>
        </Col>
        <Col>
          <RandomQuote />
        </Col>
      </Row>
      <Row className="colorGenerate">
        <Col>
          <Calc />
        </Col>
        <Col>
          <p className="description">
            Данный компонент является простым калькулятором, который позволяет
            выполнять математические операции (сложение, вычитание, умножение,
            деление) с числами и выводить результат на экран. {" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MiniProjects;
