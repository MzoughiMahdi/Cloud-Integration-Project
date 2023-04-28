import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class GoogleMaps extends Component {
  render() {
    const containerStyle = {
      width: '100%',
      height: '400px'
    };
  
    const center = {
      lat: 40.7128,
      lng: -74.0060
    };
  
    return (
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
        </GoogleMap>
      </LoadScript>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Container>
            <Row>
              <Col md={6}>
                <h1>Welcome to my landing page!</h1>
                <p>Here's some descriptive text about my awesome product or service.</p>
              </Col>
              <Col md={6}>
                <GoogleMaps />
              </Col>
            </Row>
          </Container>
        </header>
        <section className="section">
          <Container>
            <Row>
              <Col md={4}>
                <div className="card">
                  <div className="card-body">
                    <h3>Feature 1</h3>
                    <p>Here's some descriptive text about Feature 1.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card">
                  <div className="card-body">
                    <h3>Feature 2</h3>
                    <p>Here's some descriptive text about Feature 2.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card">
                  <div className="card-body">
                    <h3>Feature 3</h3>
                    <p>Here's some descriptive text about Feature 3.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <footer className="footer">
          <Container>
            <p>&copy; 2023 My Awesome Company. All rights reserved.</p>
          </Container>
        </footer>
      </div>
    )
  }
}

export default App;
