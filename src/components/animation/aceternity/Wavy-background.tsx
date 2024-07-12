"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { useTheme } from "next-themes";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let w: number,
      h: number,
      nt: number,
      ctx: CanvasRenderingContext2D | null;
    
    const init = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      ctx = canvas.getContext("2d");
      if (!ctx) return;

      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
      nt = 0;

      window.onresize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        ctx!.filter = `blur(${blur}px)`;
      };
    };

    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];

    const drawWave = (n: number) => {
      if (!ctx) return;
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    let animationId: number;
    const render = () => {
      if (!ctx) return;
      const currentTheme = theme === 'system' ? systemTheme : theme;
      ctx.fillStyle = currentTheme === 'dark' ? "black" : "white";
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    };

    init();
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.onresize = null;
    };
  }, [mounted, theme, systemTheme, blur, waveOpacity, waveWidth, colors, speed]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};