/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { chords, notes } from '../data';
import { sharedCardStyle } from '../styles';

const cardStyle = css`
  margin: 0 auto;
  text-align: center;
  width: 200px;
`;
const stopButtonStyle = css`
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
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
        <div css={[sharedCardStyle, cardStyle]} onClick={() => setChord(generateChord())}>{chord}</div>
      </div>
      <button css={[sharedCardStyle, stopButtonStyle]} onClick={stopCardPlay}>Stop</button>
    </section>
  );
}

export default CardPlay;
