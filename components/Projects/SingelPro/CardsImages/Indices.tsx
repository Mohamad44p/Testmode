"use client";

import React, { forwardRef } from "react";
import styles from "./Roadmap.module.css";

interface CardData {
  id: string;
  image: string;
}

interface IndicesProps {
  setIndicesRef: (el: HTMLDivElement | null, i: number) => void;
  cardsData: CardData[];
}

const Indices = forwardRef<HTMLDivElement, IndicesProps>(
  ({ setIndicesRef, cardsData }, ref) => (
    <div className={styles.indices} ref={ref}>
      {cardsData.map((card, i) => (
        <div
          key={card.id}
          className={`${styles.index} ${styles[`index${card.id}`]}`}
          ref={(el) => setIndicesRef(el, i)}
        >
          <p className={`${styles.indexText} ${styles.indexDescription}`}>
            Image {card.id}
          </p>
        </div>
      ))}
    </div>
  )
);

Indices.displayName = "Indices";

export default Indices;
