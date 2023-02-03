import React from 'react'
import { Switch } from 'antd'

import { Col, Container, Row } from 'react-bootstrap'


const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const Home = () => {
  return (
    <Container >
      <Row className='mt-3' >
        <Col >
        <div className="links">
        <a href="#"><i className="bi bi-github"></i></a>
        <a href="#"><i className="bi bi-telegram"></i></a>
        <a href="#"><i className="bi bi-linkedin"></i></a>
        </div>
          </Col>
        <Col>
        <div className="langAndThemes">
          <h5>Eng</h5>
        <Switch className='switch' onChange={onChange} />
        </div>
        </Col>
      </Row>
      <Row className='welcomeContent'>
        <Col className='textContainer'>
        <h1>Добро пожаловать</h1>
        <h2>Меня зовут Артем</h2>
        <h3>Здесь собрана коллекция работ и немного о себе</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tempore itaque assumenda delectus quam voluptatum unde nemo quasi vel illum.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Home