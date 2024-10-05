"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const CardProject = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  textColor,
}:{
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: any;
  range: any;
  targetScale: number;
  textColor: string;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2 style={{ color: textColor }}>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p style={{ color: textColor }}>{description}</p>
            <span>
              <a
                href={url}
                className={`mt-4`}
                style={{ color: textColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                See more &#8594;
              </a>
            </span>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={src} alt={title} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardProject;
