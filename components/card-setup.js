import { useState } from 'react';

export const CardSetup = ({ difficulty, setDifficulty, startCardPlay }) => (
  <section>
    <h2>Card Setup</h2>
    <h3>Difficulty</h3>
    <button onClick={setDifficulty('easy')}>Easy</button>
    <button onClick={setDifficulty('easy')}>Medium</button>
    <button onClick={setDifficulty('easy')}>Hard</button>
    <button onClick={setDifficulty('easy')}>Custom</button>
    <button onClick={startCardPlay}>Start!</button>
  </section>
);

export default CardSetup;
