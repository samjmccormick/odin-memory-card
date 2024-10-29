import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function InfoCard({ imgSource, cardTitle, cardText, onClick, id }) {
  function handleClick() {
    onClick(id);
  }

  return (
    <Card bg="dark" border="dark" text="white" onClick={handleClick}>
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
  id: PropTypes.number,
};

export default InfoCard;
