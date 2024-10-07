"use client";

import React, { forwardRef } from "react";
import styles from "./Roadmap.module.css";

interface ProgressBarProps {
  progressRef: React.RefObject<HTMLDivElement>;
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(({ progressRef }, ref) => (
  <div className={styles.progressBar} ref={ref}>
    <div className={styles.progress} ref={progressRef}></div>
  </div>
));

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;