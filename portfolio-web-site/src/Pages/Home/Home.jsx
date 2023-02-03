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
        <div className="container">
          <h1 className="welcomeText_1" >Добро пожаловать</h1>
          <h2 className="welcomeText_2" >Меня зовут Артем</h2>
          
          <h3 className="welcomeText_3"  > Здесь представлены мои работы</h3>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home