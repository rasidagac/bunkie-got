import { useEffect, useState } from "react";

const useRandomColor = () => {
  const [color, setColor] = useState("#ffffff");

  const generateColor = () => {
    const webSafeValues = ["00", "33", "66", "99", "CC", "FF"];
    const getRandomValue = () =>
      webSafeValues[Math.floor(Math.random() * webSafeValues.length)];
    const randomColor =
      "#" + getRandomValue() + getRandomValue() + getRandomValue();

    setColor(randomColor);
  };

  useEffect(() => {
    generateColor();
  }, []);

  return { color, generateColor };
};

export default useRandomColor;
