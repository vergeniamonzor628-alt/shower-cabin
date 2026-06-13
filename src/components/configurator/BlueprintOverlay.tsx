"use client";

import { motion } from "framer-motion";

interface BlueprintOverlayProps {
  activeCabin: string;
  doorType: string;
  doorPos: 'left' | 'right';
  hingePos: 'left' | 'right';
}

export default function BlueprintOverlay({ activeCabin, doorType, doorPos, hingePos }: BlueprintOverlayProps) {
  // Shared styles
  const wallProps = { stroke: "#cbd5e1", strokeWidth: 6, strokeLinecap: "round" as const, fill: "none" };
  const glassFixedProps = { stroke: "#94a3b8", strokeWidth: 4, strokeLinecap: "round" as const, opacity: 0.6 };
  const glassDoorProps = { stroke: "#3b82f6", strokeWidth: 4, strokeLinecap: "round" as const };
  const handleProps = { fill: "#1e293b", r: 2.5 };
  const hingeProps = { fill: "#1e293b", width: 6, height: 6, rx: 1 };
  
  // Renders a door on a given horizontal line from (x1, y) to (x2, y)
  // For niche or corner front
  const renderHorizontalDoor = (x1: number, x2: number, y: number, pos: 'left' | 'right', type: string, hinge: 'left' | 'right') => {
    const width = x2 - x1;
    const doorW = width * 0.6; // 60% is door
    const fixedW = width - doorW;
    
    // Left side door
    if (pos === 'left') {
      const doorX1 = x1;
      const doorX2 = x1 + doorW;
      const fixedX1 = doorX2;
      const fixedX2 = x2;
      
      if (type === 'stationary') {
        return <line x1={x1} y1={y} x2={x2} y2={y} {...glassFixedProps} />;
      }
      
      if (type === 'swing') {
        const isHingeLeft = hinge === 'left';
        const origin = isHingeLeft ? `${doorX1}px ${y}px` : `${doorX2}px ${y}px`;
        const rotation = isHingeLeft ? 45 : -45;
        const hX = isHingeLeft ? doorX2 - 5 : doorX1 + 5;
        
        return (
          <g>
            <line x1={fixedX1} y1={y} x2={fixedX2} y2={y} {...glassFixedProps} />
            <motion.g style={{ transformOrigin: origin }} initial={{ rotate: 0 }} animate={{ rotate: rotation }} transition={{ type: "spring", stiffness: 50 }}>
              <line x1={doorX1} y1={y} x2={doorX2} y2={y} {...glassDoorProps} />
              <circle cx={hX} cy={y} {...handleProps} />
            </motion.g>
            {/* Hinges */}
            <rect x={isHingeLeft ? doorX1 - 3 : doorX2 - 3} y={y - 3} {...hingeProps} />
          </g>
        );
      }
      
      if (type === 'sliding') {
        return (
          <g>
            <line x1={fixedX1} y1={y} x2={fixedX2} y2={y} {...glassFixedProps} />
            {/* Guide rail */}
            <line x1={x1} y1={y - 4} x2={x2} y2={y - 4} stroke="#cbd5e1" strokeWidth={2} />
            <motion.g initial={{ x: 0 }} animate={{ x: fixedW - 10 }} transition={{ type: "spring", stiffness: 40 }}>
              <line x1={doorX1} y1={y - 4} x2={doorX2} y2={y - 4} {...glassDoorProps} />
              <circle cx={doorX1 + 10} cy={y - 4} {...handleProps} />
            </motion.g>
          </g>
        );
      }
      
      if (type === 'folding') {
        const foldW = doorW / 2;
        return (
          <g>
            <line x1={fixedX1} y1={y} x2={fixedX2} y2={y} {...glassFixedProps} />
            {/* First fold hinged on left */}
            <motion.g style={{ transformOrigin: `${doorX1}px ${y}px` }} initial={{ rotate: 0 }} animate={{ rotate: 60 }} transition={{ type: "spring", stiffness: 50 }}>
              <line x1={doorX1} y1={y} x2={doorX1 + foldW} y2={y} {...glassDoorProps} />
              {/* Second fold attached to first fold */}
              <motion.g style={{ transformOrigin: `${doorX1 + foldW}px ${y}px` }} initial={{ rotate: 0 }} animate={{ rotate: -120 }} transition={{ type: "spring", stiffness: 50 }}>
                 <line x1={doorX1 + foldW} y1={y} x2={doorX1 + foldW * 2} y2={y} {...glassDoorProps} />
                 <circle cx={doorX1 + foldW * 2 - 5} cy={y} {...handleProps} />
              </motion.g>
            </motion.g>
            <rect x={doorX1 - 3} y={y - 3} {...hingeProps} />
          </g>
        );
      }
    }
    
    // Right side door
    if (pos === 'right') {
      const fixedX1 = x1;
      const fixedX2 = x1 + fixedW;
      const doorX1 = fixedX2;
      const doorX2 = x2;
      
      if (type === 'stationary') {
        return <line x1={x1} y1={y} x2={x2} y2={y} {...glassFixedProps} />;
      }
      
      if (type === 'swing') {
        const isHingeLeft = hinge === 'left';
        const origin = isHingeLeft ? `${doorX1}px ${y}px` : `${doorX2}px ${y}px`;
        const rotation = isHingeLeft ? 45 : -45;
        const hX = isHingeLeft ? doorX2 - 5 : doorX1 + 5;
        
        return (
          <g>
            <line x1={fixedX1} y1={y} x2={fixedX2} y2={y} {...glassFixedProps} />
            <motion.g style={{ transformOrigin: origin }} initial={{ rotate: 0 }} animate={{ rotate: rotation }} transition={{ type: "spring", stiffness: 50 }}>
              <line x1={doorX1} y1={y} x2={doorX2} y2={y} {...glassDoorProps} />
              <circle cx={hX} cy={y} {...handleProps} />
            </motion.g>
            <rect x={isHingeLeft ? doorX1 - 3 : doorX2 - 3} y={y - 3} {...hingeProps} />
          </g>
        );
      }
      
      if (type === 'sliding') {
        return (
          <g>
            <line x1={fixedX1} y1={y} x2={fixedX2} y2={y} {...glassFixedProps} />
            <line x1={x1} y1={y - 4} x2={x2} y2={y - 4} stroke="#cbd5e1" strokeWidth={2} />
            <motion.g initial={{ x: 0 }} animate={{ x: -fixedW + 10 }} transition={{ type: "spring", stiffness: 40 }}>
              <line x1={doorX1} y1={y - 4} x2={doorX2} y2={y - 4} {...glassDoorProps} />
              <circle cx={doorX2 - 10} cy={y - 4} {...handleProps} />
            </motion.g>
          </g>
        );
      }
      
      if (type === 'folding') {
        const foldW = doorW / 2;
        return (
          <g>
            <line x1={fixedX1} y1={y} x2={fixedX2} y2={y} {...glassFixedProps} />
            {/* First fold hinged on right */}
            <motion.g style={{ transformOrigin: `${doorX2}px ${y}px` }} initial={{ rotate: 0 }} animate={{ rotate: -60 }} transition={{ type: "spring", stiffness: 50 }}>
              <line x1={doorX2 - foldW} y1={y} x2={doorX2} y2={y} {...glassDoorProps} />
              <motion.g style={{ transformOrigin: `${doorX2 - foldW}px ${y}px` }} initial={{ rotate: 0 }} animate={{ rotate: 120 }} transition={{ type: "spring", stiffness: 50 }}>
                 <line x1={doorX2 - foldW * 2} y1={y} x2={doorX2 - foldW} y2={y} {...glassDoorProps} />
                 <circle cx={doorX2 - foldW * 2 + 5} cy={y} {...handleProps} />
              </motion.g>
            </motion.g>
            <rect x={doorX2 - 3} y={y - 3} {...hingeProps} />
          </g>
        );
      }
    }
    
    return null;
  };

  // Renders a vertical door (for right side of corner shower)
  const renderVerticalDoor = (x: number, y1: number, y2: number, type: string, hinge: 'left' | 'right') => {
    // Left/Right hinges are tricky for vertical. Let's map hinge='left' to top, hinge='right' to bottom.
    const height = y2 - y1;
    const doorH = height * 0.6;
    const fixedH = height - doorH;
    
    const doorY1 = y1 + fixedH;
    const doorY2 = y2;
    const fixedY1 = y1;
    const fixedY2 = doorY1;
    
    if (type === 'stationary') {
      return <line x1={x} y1={y1} x2={x} y2={y2} {...glassFixedProps} />;
    }
    
    if (type === 'swing') {
      const isHingeTop = hinge === 'left';
      const origin = isHingeTop ? `${x}px ${doorY1}px` : `${x}px ${doorY2}px`;
      const rotation = isHingeTop ? -45 : 45;
      const hY = isHingeTop ? doorY2 - 5 : doorY1 + 5;
      
      return (
        <g>
          <line x1={x} y1={fixedY1} x2={x} y2={fixedY2} {...glassFixedProps} />
          <motion.g style={{ transformOrigin: origin }} initial={{ rotate: 0 }} animate={{ rotate: rotation }} transition={{ type: "spring", stiffness: 50 }}>
            <line x1={x} y1={doorY1} x2={x} y2={doorY2} {...glassDoorProps} />
            <circle cx={x} cy={hY} {...handleProps} />
          </motion.g>
          <rect x={x - 3} y={isHingeTop ? doorY1 - 3 : doorY2 - 3} {...hingeProps} />
        </g>
      );
    }
    
    if (type === 'sliding') {
      return (
        <g>
          <line x1={x} y1={fixedY1} x2={x} y2={fixedY2} {...glassFixedProps} />
          <line x1={x - 4} y1={y1} x2={x - 4} y2={y2} stroke="#cbd5e1" strokeWidth={2} />
          <motion.g initial={{ y: 0 }} animate={{ y: -fixedH + 10 }} transition={{ type: "spring", stiffness: 40 }}>
            <line x1={x - 4} y1={doorY1} x2={x - 4} y2={doorY2} {...glassDoorProps} />
            <circle cx={x - 4} cy={doorY2 - 10} {...handleProps} />
          </motion.g>
        </g>
      );
    }
    
    if (type === 'folding') {
      const foldH = doorH / 2;
      return (
        <g>
          <line x1={x} y1={fixedY1} x2={x} y2={fixedY2} {...glassFixedProps} />
          <motion.g style={{ transformOrigin: `${x}px ${doorY2}px` }} initial={{ rotate: 0 }} animate={{ rotate: 60 }} transition={{ type: "spring", stiffness: 50 }}>
            <line x1={x} y1={doorY2 - foldH} x2={x} y2={doorY2} {...glassDoorProps} />
            <motion.g style={{ transformOrigin: `${x}px ${doorY2 - foldH}px` }} initial={{ rotate: 0 }} animate={{ rotate: -120 }} transition={{ type: "spring", stiffness: 50 }}>
               <line x1={x} y1={doorY2 - foldH * 2} x2={x} y2={doorY2 - foldH} {...glassDoorProps} />
               <circle cx={x} cy={doorY2 - foldH * 2 + 5} {...handleProps} />
            </motion.g>
          </motion.g>
          <rect x={x - 3} y={doorY2 - 3} {...hingeProps} />
        </g>
      );
    }
    
    return null;
  };

  return (
    <div className="w-full h-full bg-slate-900/80 backdrop-blur-md rounded-none p-4 border border-slate-700 relative overflow-hidden flex items-center justify-center">
      
      {/* Title */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
         <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide uppercase">Чертеж-схема</span>
         <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
         </span>
      </div>

      <svg viewBox="0 0 200 200" className="w-full h-full max-w-[240px] max-h-[240px]">
        {/* Floor generic grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </pattern>
        </defs>
        
        {activeCabin === 'corner' && (
          <g>
            <rect x="40" y="40" width="100" height="100" fill="url(#grid)" />
            {/* Walls */}
            <polyline points="40,160 40,40 160,40" {...wallProps} />
            
            {/* Glass panels */}
            {doorPos === 'left' ? (
              <>
                {renderHorizontalDoor(40, 140, 140, 'left', doorType, hingePos)}
                <line x1={140} y1={40} x2={140} y2={140} {...glassFixedProps} />
              </>
            ) : (
              <>
                <line x1={40} y1={140} x2={140} y2={140} {...glassFixedProps} />
                {renderVerticalDoor(140, 40, 140, doorType, hingePos)}
              </>
            )}
          </g>
        )}

        {activeCabin === 'niche' && (
          <g>
            <rect x="30" y="40" width="140" height="100" fill="url(#grid)" />
            {/* 3 Walls */}
            <polyline points="30,160 30,40 170,40 170,160" {...wallProps} />
            
            {/* Front Glass */}
            {renderHorizontalDoor(30, 170, 140, doorPos, doorType, hingePos)}
          </g>
        )}

        {activeCabin === 'walkin' && (
          <g>
            <rect x="40" y="60" width="120" height="80" fill="url(#grid)" />
            {/* Wall */}
            <line x1="20" y1="60" x2="180" y2="60" {...wallProps} />
            
            {/* Single Glass */}
            <line x1="40" y1="140" x2="160" y2="140" {...glassFixedProps} />
          </g>
        )}

        {activeCabin === 'bath' && (
          <g>
            {/* Bath outline */}
            <rect x="30" y="80" width="140" height="60" rx="10" stroke="#cbd5e1" strokeWidth="3" fill="url(#grid)" />
            {/* Wall */}
            <line x1="20" y1="80" x2="180" y2="80" {...wallProps} />
            
            {/* Glass screen */}
            {renderHorizontalDoor(30, 100, 140, 'left', doorType, hingePos)}
          </g>
        )}
      </svg>
    </div>
  );
}
