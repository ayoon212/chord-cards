/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const buttonStyle = css`

`;
const activeButtonStyle = css`
  background-color: dodgerblue;
  color: white;
`;

const buttons = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
  { value: 'custom', label: 'Custom' }
]

export const CardSetup = ({ difficulty, setDifficulty, startCardPlay }) => (
  <section>
    <h2>Card Setup</h2>
    <div>
      <h3>Difficulty</h3>
      {buttons.map(button => (
        <button
          key={button.value}
          onClick={() => setDifficulty(button.value)}
          css={[
            buttonStyle,
            difficulty === button.value ? activeButtonStyle : null
          ]}>{button.label}</button>
      ))}
    </div>
    <button onClick={startCardPlay}>Start!</button>
  </section>
);

export default CardSetup;
