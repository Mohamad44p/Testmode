"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";

import styles from "./Roadmap.module.css";
import ProgressBar from "./ProgressBar";
import Indices from "./Indices";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  id: string;
  image: string;
}

interface MainImagesCardProps {
  project: {
    custom_fields: {
      sub_images: string[];
    };
  };
}

export default function MainImagesCard({ project }: MainImagesCardProps) {
  const pinnedSectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const indicesContainerRef = useRef<HTMLDivElement>(null);
  const indicesRef = useRef<(HTMLDivElement | null)[]>([]);
  const stickyHeaderRef = useRef<HTMLDivElement>(null);

  const cardsData: CardData[] = project.custom_fields.sub_images.map(
    (image, index) => ({
      id: (index + 1).toString(),
      image: image,
    })
  );

  useEffect(() => {
    const pinnedSection = pinnedSectionRef.current;
    const stickyHeader = stickyHeaderRef.current;
    const cards = cardsRef.current;
    const progressBarContainer = progressBarRef.current;
    const progressBar = progressRef.current;
    const indicesContainer = indicesContainerRef.current;
    const indices = indicesRef.current;

    if (
      !pinnedSection ||
      !stickyHeader ||
      !progressBarContainer ||
      !progressBar ||
      !indicesContainer
    )
      return;

    const cardCount = cards.length;
    const pinnedHeight = window.innerHeight * (cardCount + 1);
    const startRotations = Array(cardCount)
      .fill(0)
      .map((_, i) => (i % 2 === 0 ? 0 : 5));
    const endRotations = Array(cardCount)
      .fill(0)
      .map((_, i) => (i % 2 === 0 ? -10 : 10));
    const progressColors = ["#ecb74c", "#7dd8cd", "#e0ff57", "#7dd8cd"];

    cards.forEach((card, index) => {
      if (card) gsap.set(card, { rotation: startRotations[index] });
    });

    let isProgressBarVisible = false;
    let currentActiveIndex = -1;

    function animateIndexOpacity(newIndex: number) {
      if (newIndex !== currentActiveIndex) {
        indices.forEach((index, i) => {
          if (index) {
            gsap.to(index, {
              opacity: i === newIndex ? 1 : 0.25,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        });
        currentActiveIndex = newIndex;
      }
    }

    function showProgressAndIndices() {
      gsap.to([progressBarContainer, indicesContainer], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      isProgressBarVisible = true;
    }

    function hideProgressAndIndices() {
      gsap.to([progressBarContainer, indicesContainer], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      isProgressBarVisible = false;
      animateIndexOpacity(-1);
    }

    ScrollTrigger.create({
      trigger: pinnedSection,
      start: "top top",
      end: `+=${pinnedHeight}`,
      pin: true,
      pinSpacing: true,
      onLeave: () => {
        hideProgressAndIndices();
      },
      onEnterBack: () => {
        showProgressAndIndices();
      },
      onUpdate: (self) => {
        const progress = self.progress * (cardCount + 1);
        const currentCard = Math.floor(progress);

        if (progress <= 1) {
          gsap.to(stickyHeader, {
            opacity: 1 - progress,
            duration: 0.1,
            ease: "none",
          });
        } else {
          gsap.set(stickyHeader, { opacity: 0 });
        }

        if (progress > 1 && !isProgressBarVisible) {
          showProgressAndIndices();
        } else if (progress <= 1 && isProgressBarVisible) {
          hideProgressAndIndices();
        }

        let progressHeight = 0;
        let colorIndex = -1;
        if (progress > 1) {
          progressHeight = ((progress - 1) / cardCount) * 100;
          colorIndex = Math.min(Math.floor(progress - 1), cardCount - 1);
        }

        gsap.to(progressBar, {
          height: `${progressHeight}%`,
          backgroundColor: progressColors[colorIndex % progressColors.length],
          duration: 0.3,
          ease: "power1.out",
        });

        if (isProgressBarVisible) {
          animateIndexOpacity(colorIndex);
        }

        cards.forEach((card, index) => {
          if (card) {
            if (index < currentCard) {
              gsap.set(card, {
                top: "50%",
                rotation: endRotations[index],
              });
            } else if (index === currentCard) {
              const cardProgress = progress - currentCard;
              const newTop = gsap.utils.interpolate(150, 50, cardProgress);
              const newRotation = gsap.utils.interpolate(
                startRotations[index],
                endRotations[index],
                cardProgress
              );
              gsap.set(card, {
                top: `${newTop}%`,
                rotation: newRotation,
              });
            } else {
              gsap.set(card, {
                top: "150%",
                rotation: startRotations[index],
              });
            }
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [cardsData.length]);

  return (
    <ReactLenis root>
      <section className="section" data-color="Ming">
      <div className={styles.container}>
        <section className={`${styles.section} ${styles.hero}`}></section>
        <section className={`${styles.section}`} ref={pinnedSectionRef}>
          <div className={styles.stickyHeader} ref={stickyHeaderRef}>
            <h1 className={styles.stickyHeaderTitle}>Project Images</h1>
          </div>

          <ProgressBar ref={progressBarRef} progressRef={progressRef} />
          <Indices
            ref={indicesContainerRef}
            setIndicesRef={(el, index) => (indicesRef.current[index] = el)}
            cardsData={cardsData}
          />

          {cardsData.map((card: CardData, index: number) => (
            <Card
              key={card.id}
              {...card}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            />
          ))}
        </section>
      </div>
      </section>
    </ReactLenis>
  );
}
