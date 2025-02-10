import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function Header({ score, highScore }) {
  return (
    <Container id="header" className="px-3">
      <Row className="headerRow">
        <Col className="text-start">
          <h1>Memory Game</h1>
        </Col>
        <Col className="text-end">
          <h2>Score: {score}</h2>
        </Col>
      </Row>
      <Row className="headerRow">
        <Col className="text-start">
          Get points for each unique image clicked!
        </Col>
        <Col className="text-end">
          <h4>High Score: {highScore}</h4>
        </Col>
      </Row>
    </Container>
  );
}

Header.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
};

export default Header;
