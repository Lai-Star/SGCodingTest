import React, {useState} from "react";
import {Card, Modal} from "react-bootstrap";

const KinoCard = ({ gameNumber, date, numbers }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <Card className="kino-card" onClick={handleShow}>
      <Card.Body>
        <Card.Title>Draw {gameNumber}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>
          {numbers?.map((num) => (
            <span key={num}>{num}&nbsp;</span>
          ))}
        </Card.Text>
      </Card.Body>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{gameNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <img src={draw.poster} alt={draw.title} className="modal-image" /> */}
          <p>{date}</p>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default KinoCard;