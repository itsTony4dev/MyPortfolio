"use client";

import { useEffect, useState } from "react";
import { usePerformanceMode } from "@/hooks/use-performance-mode";

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
};

export function Typewriter({ text, speed = 55, className = "" }: TypewriterProps) {
  const { enableHeavyEffects, ready } = usePerformanceMode();
  const [displayed, setDisplayed] = useState(text);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!ready) return;

    if (!enableHeavyEffects) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, ready, enableHeavyEffects]);

  return (
    <span className={className}>
      <span className="text-primary">{">"}</span> {displayed}
      {ready && enableHeavyEffects && !done && (
        <span className="cursor-blink text-primary">▊</span>
      )}
    </span>
  );
}
