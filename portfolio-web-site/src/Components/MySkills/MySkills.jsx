import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiOutlineHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript, IoLogoSass } from 'react-icons/io';
import {DiJavascript1, DiReact } from 'react-icons/di';
import {SiAntdesign, SiPostgresql, SiRedux} from 'react-icons/si';
import {GrReactjs} from 'react-icons/gr';
import {BsBootstrap} from 'react-icons/bs';

const MySkills = () => {
  return (
    <Row className='skillsInfo'>
       <Col>
        <AiOutlineHtml5 className='skillsIcons'/>
        <h5>HTML</h5>
       </Col>
       <Col>
       <IoLogoCss3 className='skillsIcons'/>
       <h5>CSS</h5>
       </Col>
       <Col>
       <IoLogoSass className='skillsIcons'/>
       <h5>Sass</h5>
       </Col>

       <Col>
       <IoLogoJavascript className='skillsIcons'/>
       <h5>JavaScript</h5>
       </Col>
       <Col>
       <GrReactjs className='skillsIcons'/>
       <h5>React</h5>
       </Col>
       <Col>
       <SiRedux className='skillsIcons'/>
       <h5>Redux</h5>
       </Col>
       <Col>
       <SiPostgresql className='skillsIcons'/>
       <h5>PostgreSQL</h5>
       </Col>
       <Col>
       <BsBootstrap className='skillsIcons'/>
       <h5>Bootstrap</h5>
       </Col>
       <Col>
       <SiAntdesign className='skillsIcons'/>
       <h5>Ant Design</h5>
       </Col>
       

    </Row>
  )
}

export default MySkills