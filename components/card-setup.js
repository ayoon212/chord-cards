/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { sharedCardStyle } from '../styles';

const buttonContainerStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const buttonStyle = css`
  margin-bottom: 2rem;
  flex: 0 1 40%;
`;
const activeButtonStyle = css`
  background-color: dodgerblue;
  color: white;
`;
const startButtonStyle = css`
  display: block;
  margin: 0 auto;
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
    <h3>Difficulty</h3>
    <div css={buttonContainerStyle}>
      {buttons.map(button => (
        <button
          key={button.value}
          onClick={() => setDifficulty(button.value)}
          css={[
            sharedCardStyle,
            buttonStyle,
            difficulty === button.value ? activeButtonStyle : null
          ]}>{button.label}</button>
      ))}
    </div>
    <button css={[sharedCardStyle, startButtonStyle]} onClick={startCardPlay}>Start!</button>
  </section>
);

export default CardSetup;
