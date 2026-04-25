"use client";

import React from "react";

const stable = (value: number) => Number(value.toFixed(3));

// ─── Icons ─────────────────────────────────────────────────────────────────

const ConceptIcon = () => (
  <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
    <rect
      x="8"
      y="10"
      width="22"
      height="28"
      rx="2"
      stroke="#2563EB"
      strokeWidth="1.8"
      fill="none"
    />
    <line
      x1="13"
      y1="18"
      x2="25"
      y2="18"
      stroke="#2563EB"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="13"
      y1="23"
      x2="25"
      y2="23"
      stroke="#2563EB"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="13"
      y1="28"
      x2="21"
      y2="28"
      stroke="#2563EB"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle
      cx="37"
      cy="16"
      r="8"
      stroke="#2563EB"
      strokeWidth="1.8"
      fill="none"
    />
    <path
      d="M33.5 20.5 Q33.5 23.5 37 23.5 Q40.5 23.5 40.5 20.5"
      stroke="#2563EB"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <line
      x1="35"
      y1="24.5"
      x2="39"
      y2="24.5"
      stroke="#2563EB"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="37"
      y1="5"
      x2="37"
      y2="3"
      stroke="#2563EB"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <line
      x1="43"
      y1="8"
      x2="44.5"
      y2="6.5"
      stroke="#2563EB"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <line
      x1="45"
      y1="15"
      x2="47"
      y2="15"
      stroke="#2563EB"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <line
      x1="31"
      y1="8"
      x2="29.5"
      y2="6.5"
      stroke="#2563EB"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const ApplicationIcon = () => (
  <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
    <rect
      x="4"
      y="8"
      width="32"
      height="24"
      rx="2.5"
      stroke="#2563EB"
      strokeWidth="1.8"
      fill="none"
    />
    <line x1="4" y1="15" x2="36" y2="15" stroke="#2563EB" strokeWidth="1.5" />
    <circle cx="8.5" cy="11.5" r="1.3" fill="#2563EB" />
    <circle cx="13" cy="11.5" r="1.3" fill="#2563EB" />
    <circle cx="17.5" cy="11.5" r="1.3" fill="#2563EB" />
    <circle
      cx="40"
      cy="38"
      r="8"
      stroke="#2563EB"
      strokeWidth="1.8"
      fill="none"
    />
    <circle
      cx="40"
      cy="38"
      r="3.5"
      stroke="#2563EB"
      strokeWidth="1.5"
      fill="none"
    />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = stable(40 + Math.cos(rad) * 8);
      const y1 = stable(38 + Math.sin(rad) * 8);
      const x2 = stable(40 + Math.cos(rad) * 11);
      const y2 = stable(38 + Math.sin(rad) * 11);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

const ToolsIcon = () => (
  <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
    <circle
      cx="21"
      cy="30"
      r="10"
      stroke="#2563EB"
      strokeWidth="1.8"
      fill="none"
    />
    <circle
      cx="21"
      cy="30"
      r="4"
      stroke="#2563EB"
      strokeWidth="1.5"
      fill="none"
    />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = stable(21 + Math.cos(rad) * 10);
      const y1 = stable(30 + Math.sin(rad) * 10);
      const x2 = stable(21 + Math.cos(rad) * 13.5);
      const y2 = stable(30 + Math.sin(rad) * 13.5);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#2563EB"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      );
    })}
    <circle
      cx="38"
      cy="17"
      r="6.5"
      stroke="#2563EB"
      strokeWidth="1.6"
      fill="none"
    />
    <circle
      cx="38"
      cy="17"
      r="2.5"
      stroke="#2563EB"
      strokeWidth="1.4"
      fill="none"
    />
    {[0, 60, 120, 180, 240, 300].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = stable(38 + Math.cos(rad) * 6.5);
      const y1 = stable(17 + Math.sin(rad) * 6.5);
      const x2 = stable(38 + Math.cos(rad) * 9);
      const y2 = stable(17 + Math.sin(rad) * 9);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#2563EB"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

// ─── Helper: arc path (clockwise) ──────────────────────────────────────────
// angles: 0 = top, clockwise in degrees
function arcPath(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
): string {
  const toRad = (d: number) => ((d - 90) * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startDeg));
  const y1 = cy + r * Math.sin(toRad(startDeg));
  const x2 = cx + r * Math.cos(toRad(endDeg));
  const y2 = cy + r * Math.sin(toRad(endDeg));
  // always go clockwise; compute sweep
  const sweep = (endDeg - startDeg + 360) % 360;
  const large = sweep > 180 ? 1 : 0;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

// Point on circle at given degree (0=top, clockwise)
function pt(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function CATFramework() {
  const r = 118;
  const gap = 16; // degrees to cut on each side of intersection

  // Circle centres in a 900x320 viewBox
  const c = [
    { x: 150, y: 162 }, // C1
    { x: 450, y: 162 }, // C2
    { x: 750, y: 162 }, // C3
  ];

  // S-curve exits C1 at ~40° (top-right) and enters C3-side circles accordingly
  // Exact angles chosen to match the image visually
  const exitAngle = 40; // top-right exit (C1 and C2)
  const enterAngle = 220; // bottom-left entry (C2 and C3)

  // Arc paths with gaps where S-curve passes through
  // C1: full circle EXCEPT around exitAngle
  const arc1 = arcPath(
    c[0].x,
    c[0].y,
    r,
    exitAngle + gap,
    exitAngle - gap + 360,
  );

  // C2: two arcs — skip both enterAngle and exitAngle
  const arc2a = arcPath(c[1].x, c[1].y, r, exitAngle + gap, enterAngle - gap);
  const arc2b = arcPath(
    c[1].x,
    c[1].y,
    r,
    enterAngle + gap,
    exitAngle - gap + 360,
  );

  // C3: full circle EXCEPT around enterAngle
  const arc3 = arcPath(
    c[2].x,
    c[2].y,
    r,
    enterAngle + gap,
    enterAngle - gap + 360,
  );

  // S-curve control points
  const p1 = pt(c[0].x, c[0].y, r, exitAngle); // C1 exit
  const p2 = pt(c[1].x, c[1].y, r, enterAngle); // C2 enter
  const p3 = pt(c[1].x, c[1].y, r, exitAngle); // C2 exit
  const p4 = pt(c[2].x, c[2].y, r, enterAngle); // C3 enter

  // Bezier control offset
  const off = 140;

  const curve = `
    M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}
    C ${(p1.x + off).toFixed(2)} ${p1.y.toFixed(2)},
      ${(p2.x - off).toFixed(2)} ${p2.y.toFixed(2)},
      ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}
    M ${p3.x.toFixed(2)} ${p3.y.toFixed(2)}
    C ${(p3.x + off).toFixed(2)} ${p3.y.toFixed(2)},
      ${(p4.x - off).toFixed(2)} ${p4.y.toFixed(2)},
      ${p4.x.toFixed(2)} ${p4.y.toFixed(2)}
  `;

  const dots = [p1, p2, p3, p4];

  // foreignObject bounds for each circle's content
  const foW = 180;
  const foH = 200;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 overflow-x-hidden">
      <svg
        viewBox="0 30 900 260"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ overflow: "visible" }}
      >
        {/* White fill behind each circle so background shows through arcs */}
        {c.map((centre, i) => (
          <circle key={i} cx={centre.x} cy={centre.y} r={r} fill="white" />
        ))}

        {/* Open circle arcs */}
        <path
          d={arc1}
          stroke="#2563EB"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={arc2a}
          stroke="#2563EB"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={arc2b}
          stroke="#2563EB"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={arc3}
          stroke="#2563EB"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* S-curve connector — drawn on top so it overlaps circle edges */}
        <path
          d={curve}
          stroke="#2563EB"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Dots at connection points */}
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="7" fill="#2563EB" />
        ))}

        {/* ── Circle contents via foreignObject ── */}

        {/* C1 — Concept */}
        <foreignObject
          x={c[0].x - foW / 2}
          y={c[0].y - foH / 2}
          width={foW}
          height={foH}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-1.5">
            <ConceptIcon />
            <span className="font-bold text-gray-900 text-[15px] leading-tight text-center mt-1">
              Concept
            </span>
            <span className="text-gray-500 text-[11px] text-center leading-snug px-3">
              Foundational knowledge for deep subject understanding.
            </span>
          </div>
        </foreignObject>

        {/* C2 — Application */}
        <foreignObject
          x={c[1].x - foW / 2}
          y={c[1].y - foH / 2}
          width={foW}
          height={foH}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-1.5">
            <ApplicationIcon />
            <span className="font-bold text-gray-900 text-[15px] leading-tight text-center mt-1">
              Application
            </span>
            <span className="text-gray-500 text-[11px] text-center leading-snug px-3">
              Practical implementation through real-world scenarios.
            </span>
          </div>
        </foreignObject>

        {/* C3 — Tools */}
        <foreignObject
          x={c[2].x - foW / 2}
          y={c[2].y - foH / 2}
          width={foW}
          height={foH}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-1.5">
            <ToolsIcon />
            <span className="font-bold text-gray-900 text-[15px] leading-tight text-center mt-1">
              Tools
            </span>
            <span className="text-gray-500 text-[11px] text-center leading-snug px-3">
              Resources and techniques for effective skill mastery.
            </span>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
