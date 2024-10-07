"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import styles from "./Roadmap.module.css";

interface CardProps {
  id: string;
  image: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ id, image }, ref) => (
  <div className={`${styles.card} ${styles[`card${id}`]}`} ref={ref}>
    <Image
      src={image}
      alt={`Project image ${id}`}
      layout="fill"
      objectFit="cover"
      className={styles.cardImage}
    />
  </div>
));

Card.displayName = "Card";

export default Card;