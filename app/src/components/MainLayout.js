// @flow

import React from 'react';

import { Link } from 'react-router';

import { Container, Row, Col } from 'reactstrap';

export default function MainLayout(props:any) {
  const title = 'Shop';
  return (
    <Container>
      <Row>
        <Col>
          <div class="jumbotron">
            <h1>{title}</h1>
            <Row>
              <Col>
                <ul class=" nav justify-content-center">
                  <li>
                    <Link to="main" activeClassName="active" class="nav-item nav-link">Main</Link>
                  </li>
                  <li>
                    <Link to="cart" activeClassName="active" class="nav-item nav-link">Cart</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col><div>{props.children}</div></Col>
      </Row>
    </Container>
  );
}
