import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function InfoCard({ imgSource, cardTitle, cardText }) {
  return (
    <Card>
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
};

export default InfoCard;
