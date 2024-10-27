import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function InfoCard({ imgSource, cardTitle, cardText, onClick }) {
  return (
    <Card bg="dark" border="dark" text="white" onClick={onClick}>
      <Card.Img variant="top" src={imgSource} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

InfoCard.propTypes = {
  imgSource: PropTypes.string,
  cardText: PropTypes.string,
  cardTitle: PropTypes.string,

  onClick: PropTypes.func,
};

export default InfoCard;
