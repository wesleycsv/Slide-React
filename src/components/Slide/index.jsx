import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./style.module.css";

const Slide = ({ slides }) => {
  const [ativo, setAtivo] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const refContent = React.useRef();

  React.useEffect(() => {
    const { width } = refContent.current.getBoundingClientRect();
    setPosition(-(width * ativo));
  }, [ativo]);

  const handleAnterior = () => {
    if (ativo > 0) setAtivo(ativo - 1);
  };
  const handleProximo = () => {
    if (ativo < slides.length - 1) setAtivo(ativo + 1);
  };

  return (
    <>
      <div className={styles.container}>
        {slides.map((slide) => (
          <div
            className={styles.slide}
            ref={refContent}
            style={{ transform: `translate(${position}px)` }}
            key={slide.id}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}
        <button onClick={handleAnterior} className={styles.btnAnterior}>
          <FaChevronLeft /> Anterior
        </button>
        <button onClick={handleProximo} className={styles.btnProximo}>
          Próximo <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default Slide;
