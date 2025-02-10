import { Col, Container, Row } from "react-bootstrap";
import InfoCard from "./card";
import { useState } from "react";
import PropTypes from "prop-types";

const cardArray = [
  {
    id: 0,
    url: "https://robohash.org/s",
    title: "John Doe",
    text: "You'll never find me again",
  },
  {
    id: 1,
    url: "https://robohash.org/ssa",
    title: "Slim Jim",
    text: "ironic name",
  },
  {
    id: 2,
    url: "https://robohash.org/sfff",
    title: "Tiny Tim",
    text: "unironic name",
  },
  {
    id: 3,
    url: "https://robohash.org/safsd",
    title: "Vacuum Cleaner",
    text: "A Roomba took my job",
  },
  {
    id: 4,
    url: "https://robohash.org/sfaf",
    title: "33333333333",
    text: "3?",
  },
  {
    id: 5,
    url: "https://robohash.org/sefe",
    title: "Thermo-Stat",
    text: "Brings the heat",
  },
  {
    id: 6,
    url: "https://robohash.org/swef",
    title: "Artificial Intelligence",
    text: "Could be smarter",
  },
  {
    id: 7,
    url: "https://robohash.org/swdsef",
    title: "Marvin",
    text: "Boop beep boop beep",
  },
  {
    id: 8,
    url: "https://robohash.org/swefsfaf",
    title: "Calculon",
    text: "The best actor of all time",
  },
];

function CardGrid({ incrementScore, endRound }) {
  const [positions, setPositions] = useState(shuffleGrid(cardArray));
  const [clickedCards, setClickedCards] = useState([0]);

  function shuffleGrid(array) {
    let shuffleArray = array.slice(0);
    for (let i = shuffleArray.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
    }
    return shuffleArray;
  }

  function randomizeCards() {
    setPositions(shuffleGrid(positions));
  }

  function handleCardClick(id) {
    let clickedArray = clickedCards.slice(0);
    if (!clickedCards.includes(id)) {
      setClickedCards([...clickedArray, id]);
      incrementScore();
    } else {
      setClickedCards([]);
      endRound();
    }
    randomizeCards();
  }

  return (
    <Container style={{ maxWidth: "950px" }}>
      <Row>
        {positions.map((card, index) => (
          <Col key={index} className="d-flex flex justify-content-center ">
            <InfoCard
              key={card.id}
              imgSource={card.url}
              cardTitle={card.title}
              cardText={card.text}
              id={card.id}
              onClick={handleCardClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

CardGrid.propTypes = {
  incrementScore: PropTypes.func,
  endRound: PropTypes.func,
};

export default CardGrid;
