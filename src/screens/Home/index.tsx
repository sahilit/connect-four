import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './style.sass'

const buttons = [
  {
    icon: require('../../assets/images/one/one.png'),
    text: 'Custom Game',
    color: '#4BABFF',
    route: '/comming_soon',
  },
  {
    icon: require('../../assets/images/two/two.png'),
    text: 'Two Players',
    color: '#4B7BFF',
    route: '/details',
  },
  {
    icon: require('../../assets/images/online/online.png'),
    text: 'Game Online',
    color: '#4B4BFF',
    route: '/comming_soon',
  },
  {
    icon: require('../../assets/images/training/training.png'),
    text: 'Training Game',
    color: '#6E4BFF',
    route: '/comming_soon',
  },
]

export default function Home() {
  return (
    <Container id="container">
      <Row>
        <Col className='title' lg="5" md="12">
          <h1>CONNECT FOUR!</h1>
          <p>Play with other players around the world.</p>
        </Col>
      </Row>
      <div className='card'>
        <div className='main-card'>
          <Row className="top-section">
            <Col lg="4" md="12">
              <div className="play-box">
                <i className="far fa-play-circle"></i>
                <h3>PLAY</h3>
              </div> 
            </Col>
            <Col lg="8" md="12">
              <div className="banner-image-container">
                <img
                  className='banner-image'
                  src={require('../../assets/images/4inarow/4inarow.png')}
                  alt=''
                />
              </div>
            </Col>
          </Row>
          <Row sm="2" xs="1">
            {buttons.map((data, index) => (
              <Col key={index}>
                <Link to={data.route} className='start-btn' style={{backgroundColor: data.color}}>
                  <img src={data.icon} alt={data.text} />
                  <span>{data.text}</span>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <p className="copyright">&copy; 2020</p>
      </div>
    </Container>
  )
}
