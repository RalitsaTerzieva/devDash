import { getRandomInt } from "../utils/getRandomInt";

const RandomNumberDisplay = () => {
  const randomNum = getRandomInt(1, 100);
  return <div><p style={{ color: '#666'}}>Your Lucky Number: {randomNum}</p></div>;
};

export default RandomNumberDisplay;
