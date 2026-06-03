"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SmoothVideoLoopProps {
  src: string;
  className?: string;
  fadeDurationMs?: number;
}

export function SmoothVideoLoop({ src, className, fadeDurationMs = 1000 }: SmoothVideoLoopProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0); // Start hidden to fade in smoothly
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isFadingOut = false;
    let fadeOutTimeout: NodeJS.Timeout;

    const handleTimeUpdate = () => {
      // Если до конца осталось время затухания, начинаем затемнение
      if (!isFadingOut && video.duration && video.currentTime >= video.duration - (fadeDurationMs / 1000)) {
        isFadingOut = true;
        setOpacity(0); // Уводим в темноту

        // Ждем пока видео полностью затухнет, затем перематываем и включаем снова
        fadeOutTimeout = setTimeout(() => {
          video.currentTime = 0;
          video.play().catch(e => console.warn("Loop play failed:", e));
          
          // Даем чуть-чуть времени, чтобы кадр обновился в темноте, и плавно показываем
          requestAnimationFrame(() => {
            setOpacity(1);
            isFadingOut = false;
          });
        }, fadeDurationMs);
      }
    };

    const handleCanPlay = () => {
      if (!isReady) {
        setIsReady(true);
        setOpacity(1); // Плавное появление при первой загрузке
        video.play().catch(e => console.warn("Initial play failed:", e));
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("canplay", handleCanPlay);

    // Запускаем
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("canplay", handleCanPlay);
      clearTimeout(fadeOutTimeout);
    };
  }, [fadeDurationMs, isReady]);

  return (
    <div className={cn("relative overflow-hidden bg-black", className)}>
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
        style={{ 
          transitionDuration: `${fadeDurationMs}ms`,
          opacity: opacity
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
