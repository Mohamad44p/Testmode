"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
}

export default function Component() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPos({ x: clientX, y: clientY });

      if (cursorRef.current && cursorRingRef.current) {
        cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
        cursorRingRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }

      // Add new particle
      particles.current.push({
        x: clientX,
        y: clientY,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        life: 20,
      });
    };

    const onMouseEnterClickable = (e: MouseEvent) => {
      setIsHovering(true);
      magneticAttraction(e.currentTarget as HTMLElement);
    };

    const onMouseLeaveClickable = () => {
      setIsHovering(false);
    };

    const magneticAttraction = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      if (cursorRef.current && cursorRingRef.current) {
        cursorRef.current.style.transform = `translate(${centerX}px, ${centerY}px)`;
        cursorRingRef.current.style.transform = `translate(${centerX}px, ${centerY}px)`;
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    const clickables = document.querySelectorAll('button, [role="button"]');
    clickables.forEach((elem) => {
      elem.addEventListener("mouseenter", onMouseEnterClickable);
      elem.addEventListener("mouseleave", onMouseLeaveClickable);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      clickables.forEach((elem) => {
        elem.removeEventListener("mouseenter", onMouseEnterClickable);
        elem.removeEventListener("mouseleave", onMouseLeaveClickable);
      });
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const animate = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.current.forEach((particle, index) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.life--;

          if (particle.life <= 0) {
            particles.current.splice(index, 1);
          } else {
            const gradient = ctx.createRadialGradient(
              particle.x,
              particle.y,
              0,
              particle.x,
              particle.y,
              particle.size
            );
            gradient.addColorStop(
              0,
              `rgba(255, 255, 255, ${particle.life / 20})`
            );
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }
        });
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCursorColor = () => {
    const hue = (cursorPos.x / window.innerWidth) * 360;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 9998 }}
      />
      <div
        ref={cursorRef}
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out ${
          isHovering ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: getCursorColor(),
          boxShadow: `0 0 10px ${getCursorColor()}`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        ref={cursorRingRef}
        className={`fixed w-10 h-10 rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out ${
          isHovering ? "scale-150" : "scale-100"
        }`}
        style={{
          border: `2px solid ${getCursorColor()}`,
          boxShadow: `0 0 15px ${getCursorColor()}`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Innovative Cursor Showcase
        </h1>
        <p className="mb-4 text-gray-300">
          Move your cursor around and hover over the buttons to see the magical
          effects!
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Explore
          </button>
          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Discover
          </button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
