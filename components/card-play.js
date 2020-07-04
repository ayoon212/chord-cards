/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { chords, notes } from '../data';

const cardStyle = css`
  border: 1px solid black;
  margin: 0 auto;
  max-width: 80%;
  padding: 2rem 0;
  text-align: center;
  width: 200px;
`;

const chordsLength = chords.length;
const notesLength = notes.length;
function generateChord() {
  const newNoteIndex = Math.floor(Math.random() * notesLength);
  const newChordIndex = Math.floor(Math.random() * chordsLength);
  return `${notes[newNoteIndex]}${chords[newChordIndex]}`
}

export const CardPlay = ({ difficulty, stopCardPlay }) => {
  const [chord, setChord] = useState(generateChord());

  return (
    <section>
      <h2>CardPlay</h2>
      <div>
        <div css={cardStyle} onClick={() => setChord(generateChord())}>{chord}</div>
      </div>
      <button onClick={stopCardPlay}>Stop</button>
    </section>
  );
}

export default CardPlay;
