import { getRandomInt } from '../utils/mathUtils';

const RandomNumberDisplay = () => {
  const randomNum = getRandomInt(1, 100);
  return <div>Random Number: {randomNum}</div>;
};

export default RandomNumberDisplay;
