import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer-bottom align-items-center text-center">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="footer-copyright">
                Copyright ©2019 All rights reserved by{' '}
                <a href="/">Delivery Pte Ltd</a>.
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
}
