import React from "react";
import Slide from "./components/Slide";

import image1 from "./assets/img/01.jpg";
import image2 from "./assets/img/02.jpg";
import image3 from "./assets/img/03.jpg";

const slideContent = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
];

function App() {
  return (
    <>
      <Slide slides={slideContent} />
    </>
  );
}

export default App;
