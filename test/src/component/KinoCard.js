import React from "react";
import Card from "react-bootstrap/Card";

const KinoCard = ({ gameNumber, date, numbers }) => {
  return (
    <Card className="kino-card">
      <Card.Body>
        <Card.Title>Draw {gameNumber}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>
          {numbers.map((num) => (
            <span key={num}>{num}&nbsp;</span>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default KinoCard;