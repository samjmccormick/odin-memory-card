import { Col, Container, Row } from "react-bootstrap";
import InfoCard from "./card";
import { useState } from "react";
import PropTypes from "prop-types";

const cardArray = [
  {
    id: 0,
    url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZjajBpZjllYXFmaGdyemh1cjV5bXJ3ZTl4dTVjeTUxb3F4MmRwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IylOPCNkiqOgMyA/giphy.gif",
    title: "Pepe Silvia",
    text: "have a coffee and cigarette to calm down",
  },
  {
    id: 1,
    url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZjajBpZjllYXFmaGdyemh1cjV5bXJ3ZTl4dTVjeTUxb3F4MmRwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IylOPCNkiqOgMyA/giphy.gif",
    title: "Pepe bannana",
    text: "have a coffee sets estest to tes down",
  },
  {
    id: 2,
    url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZjajBpZjllYXFmaGdyemh1cjV5bXJ3ZTl4dTVjeTUxb3F4MmRwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IylOPCNkiqOgMyA/giphy.gif",
    title: "54fs64ef465efa654",
    text: "hgenerjericic",
  },
  {
    id: 3,
    url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZjajBpZjllYXFmaGdyemh1cjV5bXJ3ZTl4dTVjeTUxb3F4MmRwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IylOPCNkiqOgMyA/giphy.gif",
    title: "22222222222",
    text: "222222222222222",
  },
  {
    id: 4,
    url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZjajBpZjllYXFmaGdyemh1cjV5bXJ3ZTl4dTVjeTUxb3F4MmRwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IylOPCNkiqOgMyA/giphy.gif",
    title: "33333333333333",
    text: "33333333333333",
  },
  {
    id: 5,
    url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZjajBpZjllYXFmaGdyemh1cjV5bXJ3ZTl4dTVjeTUxb3F4MmRwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IylOPCNkiqOgMyA/giphy.gif",
    title: "4444444444444",
    text: "4444444444",
  },
  {
    id: 6,
    url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZjajBpZjllYXFmaGdyemh1cjV5bXJ3ZTl4dTVjeTUxb3F4MmRwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IylOPCNkiqOgMyA/giphy.gif",
    title: "55555555",
    text: "have a coffee and cigarette to calm down",
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
    <Container>
      <Row>
        {positions.map((card, index) => (
          <Col key={index}>
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
