import React, { FC, useRef, useEffect, useState } from "react";
import variables from "../../variables.module.scss";

const Fire: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number>();
  const [canvasWidth, setCanvasWidth] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const parentWidth = canvas.parentElement?.clientWidth || 500;
      setCanvasWidth(parentWidth);
      canvas.width = parentWidth;
    };

    updateCanvasSize();

    const height = canvas.height;

    let time = 0;

    const drawFlames = () => {
      ctx.clearRect(0, 0, canvas.width, height);

      const flameColor = variables.colorAccent;
      const flameHeight = height / 2;

      for (let i = 0; i < canvas.width; i += 5) {
        const y =
          height - flameHeight + Math.sin((i + time) * 0.1) * flameHeight;
        ctx.fillStyle = flameColor;
        ctx.fillRect(i, y, 5, height - y);
      }

      ctx.globalAlpha = 2;

      time += 0.1;

      requestIdRef.current = requestAnimationFrame(drawFlames);
    };

    requestIdRef.current = requestAnimationFrame(drawFlames);

    window.addEventListener("resize", updateCanvasSize);

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} width={canvasWidth} height={200} />;
};

export default Fire;
