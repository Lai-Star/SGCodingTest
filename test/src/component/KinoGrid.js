import React from "react";
import KinoCard from "./KinoCard";
import {Container, Row, Col} from "react-bootstrap";

const KinoGrid = ({ draws }) => {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {draws.map((draw) => (
          <Col key={draw.gameNumber}>
            <KinoCard {...draw} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default KinoGrid;