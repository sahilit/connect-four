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
      <div className='title'>
        <h1>CONNECT FOUR!</h1>
        <p>Play with other players <br/> around the world.</p>
      </div>
      <div className='card'>
        <div className='main-card'>
          <Row className="top-section">
            <Col xs="4">
              <div className="play-box">
                <i className="far fa-play-circle"></i>
                <h3>PLAY</h3>
              </div> 
            </Col>
            <Col xs="8">
              <div className="banner-image-container">
                <img
                  className='banner-image'
                  src={require('../../assets/images/4inarow/4inarow.png')}
                  alt=''
                />
              </div>
            </Col>
          </Row>
          <Row xs="2">
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
