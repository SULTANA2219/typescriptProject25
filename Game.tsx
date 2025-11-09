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
  const values = ['🐶', '😺', ' 
