#DesignAMemoryGame

  import React, {useState, useEffect} from 'react';
import'./App.css';

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const generateCards = (): Card[] => {
  const values = ['🐶', '😺', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
  const deck = [...values, ...values].map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
  return deck.sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(generateCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].value === cards[second].value){
        setCards(prev => prev.map(card => card.id === first || card.id === second ? {...card, isMatched: true } : card));
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(card => carf.id === first || card.id === second ? { ...card, isFlipped: false }: card));
        }, 1000);
      }
      setFlippedCards([]);
      setMoves(prev => prev+1);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (id: number) => 
    {
      if (flippedCards.length<2 && !card[id].isFlipped && !cards[id].isMatched) {
        setCards(prev => prev.map(card => card.id === id ? { ...card. isFlipped: true }: card));
        setFlippedCards(prev => [...prev, id]);
      }
    };

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMoves(0);
  };

  const isGameWon = cards.every(card => card.isMatched);

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <div className="board">
        {cards.map(card => (
      <div 
        key={card.id}
        className={`card ${card.isFlipped || card.isMatched ? 'flipped': }`}
        onClick={() => 
          handleCardClick(card.id)}
        >
        {card.isFlipped || card.isMatched ? card.value:'?'}
      </div>
      ))}
      </div>
      <div className="status">
        Moves: {moves}
        {isGameWon && <p>Congratulations! You won!</p>
      </div>
          <button onClick={resetGame}>Reset Game</button>
    </div>
    );
};

export default App;
          
        
