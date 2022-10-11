import "./App.css";
import React, { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import images from "./images/index";

function App() {
  const [cards, setCards] = useState([
    {
      image: images.BurjKhalifa,
      label: "Burj Khalifa",
      id: 0,
    },
    {
      image: images.Colosseum,
      label: "Colosseum",
      id: 1,
    },
    {
      image: images.DomeOfTheRock,
      label: "Dome of the Rock",
      id: 2,
    },
    {
      image: images.EmpireStateBuilding,
      label: "Empire State Building",
      id: 3,
    },
    {
      image: images.Flatiron,
      label: "Flatiron",
      id: 4,
    },
    {
      image: images.HagiaSophia,
      label: "Hagia Sophia",
      id: 5,
    },
    {
      image: images.LeaningTower,
      label: "Leaning Tower of Pisa",
      id: 6,
    },
    {
      image: images.OneWorldTrade,
      label: "One World Trade Center",
      id: 7,
    },
    {
      image: images.PetronasTowers,
      label: "Petronas Towers",
      id: 8,
    },
    {
      image: images.SpaceNeedle,
      label: "Space Needle",
      id: 9,
    },
    {
      image: images.StBasilCathedral,
      label: "St. Basil's Cathedral",
      id: 10,
    },
    {
      image: images.SydneyOpera,
      label: "Sydney Opera House",
      id: 11,
    },
    {
      image: images.Taipei101,
      label: "Taipei 101",
      id: 12,
    },
    {
      image: images.TajMahal,
      label: "Taj Mahal",
      id: 13,
    },
    {
      image: images.Transamerica,
      label: "Transamerica Pyramid",
      id: 14,
    },
    {
      image: images.FallingWater,
      label: "Falling Water",
      id: 15,
    },
  ]);

  const [shuffledCards, setShuffledCards] = useState([]);
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);
  const [clicked, setClicked] = useState([]);

  const shuffle = (cardArray) => {
    let tempArray = [].concat(cardArray);
    let currentIndex = tempArray.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = tempArray[currentIndex];
      tempArray[currentIndex] = tempArray[randomIndex];
      tempArray[randomIndex] = temporaryValue;
    }

    setShuffledCards(tempArray);
  };

  const refreshClicked = () => {
    setClicked([]);
  };

  const resetGame = () => {
    setCurrent(0);
    refreshClicked();
  };

  const incrementScore = () => {
    setCurrent((prevCurrent) => prevCurrent + 1);
  };

  const updateBest = () => {
    if (current > best) {
      setBest(current);
    }
  };

  useEffect(() => {
    // If the current score is greater than the best score, then we need to update the best score
    if (current > best) {
      setBest(current);
    }
  }, [current]);

  const handleCardClick = (e, id) => {
    e.preventDefault();
    // First we need to have it check if the card has already been clicked
    if (clicked.includes(id)) {
      // If it has, then we need to reset the game
      resetGame();
    } else {
      // If it hasn't, then we need to increment the current score
      setClicked((prevClicked) => [...prevClicked, id]);
      incrementScore();
    }
    // Then we need to shuffle the cards
    shuffle(cards);
  };

  useEffect(() => {
    shuffle(cards);
  }, []);

  return (
    <div className="App">
      <nav>
        <div className="title">Memory Game - Famous Buildings</div>
        <Scoreboard current={current} best={best} />
      </nav>
      <div className="message-container">
        See if you can select a different picture each round!
      </div>
      <div className="main-container">
        <div className="game-container">
          {shuffledCards.map((item) => {
            return (
              <Card
                image={item.image}
                label={item.label}
                id={item.id}
                key={item.id}
                onClick={handleCardClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
