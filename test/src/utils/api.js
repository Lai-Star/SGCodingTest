import axios from "axios";

export const getDraws = async (drawNumber, number, sort) => {
  const response = await axios.get(
    `https://puertorico.secondchancebonuszone.com/kino/past_drawings.php?drawid=${drawNumber}&number=${number}&sort=${sort}`
  );
  return response.data;
};

export const getLatestDraw = async () => {
  const response = await axios.get(
    "https://puertorico.secondchancebonuszone.com/kino/past_drawings.php"
  );
  return response.data;
};