import React, {
  useState,
  useEffect,
  Children,
  cloneElement,
  useRef,
} from "react";
import styles from "./Carousel.module.css";
import leftArrow from "../../img/leftArrow.png";
import rightArrow from "../../img/rightArrow.png";

function Carousel({ children }) {
  const ref = useRef(null);
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + ref.current.offsetWidth;
      if (newOffset > 0) newOffset = -(ref.current.offsetWidth * 4);
      return newOffset;
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - ref.current.offsetWidth;
      if (newOffset < -(ref.current.offsetWidth * 4)) newOffset = 0;
      return newOffset;
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            width: "100%",
            maxWidth: ref.current.offsetWidth,
          },
        });
      })
    );
  }, []);

  return (
    <div className={styles.mainContainer}>
      <img
        style={{ marginRight: "50px" }}
        className={styles.arrow}
        src={leftArrow}
        onClick={handleLeftArrowClick}
      ></img>
      <div className={styles.window}>
        <div
          ref={ref}
          className={styles.allItems}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <img
        style={{ marginLeft: "50px" }}
        className={styles.arrow}
        src={rightArrow}
        onClick={handleRightArrowClick}
      ></img>
    </div>
  );
}

export default Carousel;
