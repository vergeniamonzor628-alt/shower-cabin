"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SmoothVideoLoopProps {
  src: string;
  className?: string;
  fadeDurationMs?: number;
}

export function SmoothVideoLoop({ src, className, fadeDurationMs = 1500 }: SmoothVideoLoopProps) {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    let isTransitioning = false;

    const handleTimeUpdate = (vCurrent: HTMLVideoElement, vNext: HTMLVideoElement, currentId: 1 | 2) => {
      // Начинаем переход за fadeDurationMs до конца видео
      if (!isTransitioning && vCurrent.duration && vCurrent.currentTime >= vCurrent.duration - (fadeDurationMs / 1000)) {
        isTransitioning = true;
        
        // Запускаем следующее видео с начала
        vNext.currentTime = 0;
        vNext.play().catch(e => console.warn("Video play failed:", e));
        
        // Переключаем активное видео для CSS crossfade
        setActiveVideo(currentId === 1 ? 2 : 1);
        
        // Останавливаем старое видео после завершения перехода
        setTimeout(() => {
          vCurrent.pause();
          isTransitioning = false;
        }, fadeDurationMs);
      }
    };

    const onTimeUpdate1 = () => handleTimeUpdate(v1, v2, 1);
    const onTimeUpdate2 = () => handleTimeUpdate(v2, v1, 2);

    v1.addEventListener("timeupdate", onTimeUpdate1);
    v2.addEventListener("timeupdate", onTimeUpdate2);

    // Принудительно запускаем первое видео
    v1.play().catch(e => console.warn("Initial video play failed:", e));

    return () => {
      v1.removeEventListener("timeupdate", onTimeUpdate1);
      v2.removeEventListener("timeupdate", onTimeUpdate2);
    };
  }, [fadeDurationMs]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <video
        ref={video1Ref}
        muted
        playsInline
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out",
          activeVideo === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
        )}
        style={{ transitionDuration: `${fadeDurationMs}ms` }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <video
        ref={video2Ref}
        muted
        playsInline
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out",
          activeVideo === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
        )}
        style={{ transitionDuration: `${fadeDurationMs}ms` }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
