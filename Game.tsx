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

  useEffect(()
