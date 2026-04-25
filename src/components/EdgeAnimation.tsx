"use client";

import React, {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const Ico = {
  Lightbulb: ({ c = "white" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={c}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 28, height: 28 }}
    >
      <path d="M12 2a7 7 0 0 1 5.29 11.58c-.59.71-1.04 1.56-1.29 2.42H8c-.25-.86-.7-1.7-1.29-2.42A7 7 0 0 1 12 2z" />
      <path d="M9 17h6M10 20h4" />
      <circle cx="12" cy="7.5" r="1" fill={c} stroke="none" />
    </svg>
  ),
  Expert: ({ c = "white" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={c}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 28, height: 28 }}
    >
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4" />
      <rect x="13" y="10" width="8" height="6" rx="1" />
      <path d="M16 12.5l1.5 1.5 2.5-2.5" />
    </svg>
  ),
  Framework: ({ c = "white" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={c}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 28, height: 28 }}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <path d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93" />
      <circle cx="12" cy="12" r="7" strokeDasharray="3 3" />
    </svg>
  ),
  Tech: ({ c = "white" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={c}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 28, height: 28 }}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a13.5 13.5 0 0 1 0 18M12 3a13.5 13.5 0 0 0 0 18" />
      <path d="M8.5 7.5a10 10 0 0 1 7 0" />
    </svg>
  ),
  Diverse: ({ c = "white" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={c}
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 28, height: 28 }}
    >
      <path d="M7 17L17 7M9 7h8v8" />
      <path d="M7 7l10 10M7 9v8h8" opacity={0.4} />
    </svg>
  ),
  Impact: ({ c = "white" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={c}
      strokeWidth={1.7}
      strokeLinecap="round"
      style={{ width: 28, height: 28 }}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="1" fill={c} stroke="none" />
    </svg>
  ),
  Delivery: ({ c = "white" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={c}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 28, height: 28 }}
    >
      <path d="M3 8l9-5 9 5v8l-9 5-9-5V8zM12 3v14M3 8l9 5 9-5" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    id: 1,
    pos: "top",
    icon: Ico.Lightbulb,
    solid: false,
    title: "Tailored Solutions",
    desc: "Programs customized to your organization's goals and challenges.",
  },
  {
    id: 2,
    pos: "bottom",
    icon: Ico.Expert,
    solid: true,
    title: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
  },
  {
    id: 3,
    pos: "top",
    icon: Ico.Framework,
    solid: true,
    title: "Innovative Framework",
    desc: "Proprietary methods for impactful, application-driven results.",
  },
  {
    id: 4,
    pos: "bottom",
    icon: Ico.Tech,
    solid: true,
    title: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning experiences.",
  },
  {
    id: 5,
    pos: "top",
    icon: Ico.Diverse,
    solid: false,
    title: "Diverse Offerings",
    desc: "Courses across industries, skill levels, and emerging fields.",
  },
  {
    id: 6,
    pos: "bottom",
    icon: Ico.Impact,
    solid: true,
    title: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
  },
  {
    id: 7,
    pos: "top",
    icon: Ico.Delivery,
    solid: false,
    title: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP SIZING CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const D_OUTER = 112; // full circle slot incl. dashed ring
const D_WHITE = 94; // white shadow ring
const D_ICON = 72; // coloured icon disc
const LABEL_H = 132; // label row height (top + bottom)
const GAP_W = 56; // gap between circle columns (chevron here)
const CONNECTOR_PAD = 28; // equal top/bottom connector extension from circle

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP: STEP CIRCLE
// ─────────────────────────────────────────────────────────────────────────────
const DeskCircle = React.forwardRef<
  HTMLDivElement,
  { step: (typeof STEPS)[number]; idx: number }
>(({ step, idx }, ref) => {
  const Icon = step.icon;
  return (
    // Outer slot — sized to D_OUTER, this is the dashed ring boundary
    <div
      ref={ref}
      style={{
        width: D_OUTER,
        height: D_OUTER,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* ① Dashed outer ring — SVG circle so it never gets clipped */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          overflow: "visible",
          pointerEvents: "none",
          zIndex: 0,
        }}
        width={D_OUTER}
        height={D_OUTER}
        viewBox={`0 0 ${D_OUTER} ${D_OUTER}`}
      >
        <circle
          cx={D_OUTER / 2}
          cy={D_OUTER / 2}
          r={D_OUTER / 2 - 1}
          fill="none"
          stroke="#bfdbfe"
          strokeWidth={2}
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
      </svg>

      {/* ② White shadow ring */}
      <div
        style={{
          position: "absolute",
          width: D_WHITE,
          height: D_WHITE,
          top: (D_OUTER - D_WHITE) / 2,
          left: (D_OUTER - D_WHITE) / 2,
          borderRadius: "50%",
          background: "#fff",
          boxShadow: "0 6px 20px rgba(30,127,224,0.13)",
          zIndex: 1,
        }}
      />

      {/* ③ Icon disc */}
      <motion.div
        style={{
          position: "absolute",
          width: D_ICON,
          height: D_ICON,
          top: (D_OUTER - D_ICON) / 2,
          left: (D_OUTER - D_ICON) / 2,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#1e7fe0 0%,#0b4da3 100%)",
          border: "none",
          boxShadow: "0 4px 14px rgba(30,127,224,0.28)",
          zIndex: 2,
          cursor: "default",
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.45,
          delay: idx * 0.08,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 15 },
        }}
      >
        <Icon c="white" />
      </motion.div>
    </div>
  );
});
DeskCircle.displayName = "DeskCircle";

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP: STEP LABEL (dot ref forwarded)
// ─────────────────────────────────────────────────────────────────────────────
const DeskLabel = React.forwardRef<
  HTMLSpanElement,
  { step: (typeof STEPS)[number]; idx: number }
>(({ step, idx }, dotRef) => (
  <motion.div
    style={{ position: "relative", width: "100%", height: 76 }}
    initial={{ opacity: 0, y: step.pos === "top" ? -10 : 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.35 + idx * 0.07 }}
  >
    {/* Blue dot — ref anchor for SVG line */}
    <span
      ref={dotRef}
      style={{
        position: "absolute",
        top: step.pos === "top" ? "calc(100% - 10px)" : 5,
        left: "50%",
        transform: "translateX(-50%)",
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "#1a6fd4",
      }}
    />
    <div
      style={{
        marginTop: step.pos === "bottom" ? 20 : 10,
        marginLeft: "calc(50% + 12px)",
        width: 168,
      }}
    >
      <p
        style={{
          margin: 0,
          fontWeight: 700,
          fontSize: 12,
          lineHeight: 1.3,
          color: "#111827",
        }}
      >
        {step.title}
      </p>
      <p
        style={{
          margin: "3px 0 0",
          fontSize: 10.5,
          lineHeight: 1.5,
          color: "#6b7280",
        }}
      >
        {step.desc}
      </p>
    </div>
  </motion.div>
));
DeskLabel.displayName = "DeskLabel";

// ─────────────────────────────────────────────────────────────────────────────
// DOUBLE CHEVRON SVG SHAPE
// ─────────────────────────────────────────────────────────────────────────────
const DblChevron = ({ x, y }: { x: number; y: number }) => {
  const H = 9,
    W = 5,
    SP = 5;
  return (
    <g
      stroke="#93c5fd"
      strokeWidth={2.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <polyline
        points={`${x - SP / 2 - W},${y - H} ${x - SP / 2},${y} ${x - SP / 2 - W},${y + H}`}
      />
      <polyline
        points={`${x + SP / 2},${y - H} ${x + SP / 2 + W},${y} ${x + SP / 2},${y + H}`}
      />
    </g>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP LAYOUT
// ─────────────────────────────────────────────────────────────────────────────
function DesktopView() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  type Line = { x1: number; y1: number; x2: number; y2: number };
  type Chev = { x: number; y: number };
  const LINE_SW = 1.8;
  const LINE_CAP_ADJUST = LINE_SW / 2;
  const [lines, setLines] = useState<Line[]>([]);
  const [chevrons, setChevrons] = useState<Chev[]>([]);
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });

  const recalc = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cr = canvas.getBoundingClientRect();

    const nl: Line[] = [];
    const nc: Chev[] = [];

    STEPS.forEach((step, i) => {
      const cel = circleRefs.current[i];
      const del = dotRefs.current[i];
      if (!cel || !del) return;

      const cRect = cel.getBoundingClientRect();
      const dRect = del.getBoundingClientRect();

      // Circle edges relative to canvas
      const circleTop = cRect.top - cr.top;
      const circleBot = cRect.bottom - cr.top;
      const dotX = dRect.left - cr.left + dRect.width / 2;

      // Blue dot edges relative to canvas
      const dotTop = dRect.top - cr.top;
      const dotBottom = dRect.bottom - cr.top;

      if (step.pos === "top") {
        // Keep connector perfectly centered on the circle axis.
        nl.push({
          x1: dotX,
          y1: dotBottom + LINE_CAP_ADJUST,
          x2: dotX,
          y2: circleTop + LINE_CAP_ADJUST,
        });
      } else {
        // Keep connector perfectly centered on the circle axis.
        nl.push({
          x1: dotX,
          y1: circleBot - LINE_CAP_ADJUST,
          x2: dotX,
          y2: dotTop - LINE_CAP_ADJUST,
        });
      }

      // Chevron midpoint
      if (i < STEPS.length - 1) {
        const nel = circleRefs.current[i + 1];
        if (nel) {
          const nRect = nel.getBoundingClientRect();
          const cx1 = cRect.left - cr.left + cRect.width / 2;
          const cx2 = nRect.left - cr.left + nRect.width / 2;
          const cy = cRect.top - cr.top + cRect.height / 2;
          nc.push({ x: (cx1 + cx2) / 2, y: cy });
        }
      }
    });

    setLines(nl);
    setChevrons(nc);
    setSvgSize({ w: cr.width, h: cr.height });
  }, []);

  useLayoutEffect(() => {
    recalc();
  }, [recalc]);
  useEffect(() => {
    const ro = new ResizeObserver(recalc);
    if (canvasRef.current) ro.observe(canvasRef.current);
    return () => ro.disconnect();
  }, [recalc]);

  const colTemplate = STEPS.map((_, i) =>
    i < STEPS.length - 1 ? `${D_OUTER}px ${GAP_W}px` : `${D_OUTER}px`,
  ).join(" ");

  return (
    <div style={{ overflowX: "auto" }}>
      <div
        ref={canvasRef}
        style={{
          display: "grid",
          gridTemplateColumns: colTemplate,
          gridTemplateRows: `${LABEL_H}px ${D_OUTER}px ${LABEL_H}px`,
          width: "fit-content",
          maxWidth: "100%",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* SVG overlay */}
        {svgSize.w > 0 && (
          <svg
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 0,
              overflow: "visible",
            }}
            width={svgSize.w}
            height={svgSize.h}
            viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
          >
            {lines.map((ln, i) => (
              <motion.line
                key={i}
                x1={ln.x1}
                y1={ln.y1}
                x2={ln.x2}
                y2={ln.y2}
                stroke="#3b82f6"
                strokeWidth={LINE_SW}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.55,
                  delay: 0.5 + i * 0.06,
                  ease: "easeOut",
                }}
              />
            ))}
            {chevrons.map((ch, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.65 + i * 0.07 }}
              >
                <DblChevron x={ch.x} y={ch.y} />
              </motion.g>
            ))}
          </svg>
        )}

        {/* Grid cells */}
        {STEPS.map((step, i) => {
          const col = i * 2 + 1;
          const isTop = step.pos === "top";
          return (
            <React.Fragment key={step.id}>
              <div
                style={{
                  gridColumn: col,
                  gridRow: 1,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  paddingBottom: CONNECTOR_PAD,
                  zIndex: 2,
                }}
              >
                {isTop && (
                  <DeskLabel
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    step={step}
                    idx={i}
                  />
                )}
              </div>
              <div
                style={{
                  gridColumn: col,
                  gridRow: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <DeskCircle
                  ref={(el) => {
                    circleRefs.current[i] = el;
                  }}
                  step={step}
                  idx={i}
                />
              </div>
              <div
                style={{
                  gridColumn: col,
                  gridRow: 3,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingTop: CONNECTOR_PAD,
                  zIndex: 2,
                }}
              >
                {!isTop && (
                  <DeskLabel
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    step={step}
                    idx={i}
                  />
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE: RADIAL LAYOUT (screenshot-style circular diagram)
// Center = "OUR USPS" disc, 6 items arranged around a large circle
// ─────────────────────────────────────────────────────────────────────────────

const MOBILE_STEPS = STEPS.slice(0, 6);
// 6 equal positions around the circle (60deg apart), starting from top.
const RADIAL_ANGLES_DEG = [-90, -30, 30, 90, 150, 210];

function MobileView() {
  // Responsive: use a square viewport based on screen width
  const size = Math.min(
    360,
    typeof window !== "undefined" ? window.innerWidth - 24 : 340,
  );
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.39; // radius where small circles sit (center-to-center)
  const centerR = size * 0.19; // center disc radius
  const smallD = size * 0.125; // small icon disc diameter
  const smallR = smallD / 2;
  const dashedR = size * 0.455; // outer dashed ring radius

  // Label box width
  const lblW = size * 0.22;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 12px",
      }}
    >
      <div style={{ position: "relative", width: size, height: size }}>
        {/* ── SVG layer: dashed ring + connector lines ── */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            overflow: "visible",
            zIndex: 0,
          }}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Outer dashed ring */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={dashedR}
            fill="none"
            stroke="#bfdbfe"
            strokeWidth={1.5}
            strokeDasharray="6 5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Large filled gradient ring (the "pie" bg circle) */}
          <circle
            cx={cx}
            cy={cy}
            r={outerR + smallR + 4}
            fill="url(#radialBg)"
            opacity={0.12}
          />

          <defs>
            <radialGradient id="radialBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1e7fe0" stopOpacity="1" />
              <stop offset="100%" stopColor="#1e7fe0" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Connector lines from center disc edge to each small circle */}
          {MOBILE_STEPS.map((_, i) => {
            const angleDeg = RADIAL_ANGLES_DEG[i];
            const rad = (angleDeg * Math.PI) / 180;
            const sx = cx + Math.cos(rad) * (centerR + 2);
            const sy = cy + Math.sin(rad) * (centerR + 2);
            const ex = cx + Math.cos(rad) * (outerR - smallR - 2);
            const ey = cy + Math.sin(rad) * (outerR - smallR - 2);
            return (
              <motion.line
                key={i}
                x1={sx}
                y1={sy}
                x2={ex}
                y2={ey}
                stroke="#3b82f6"
                strokeWidth={1.5}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + i * 0.08,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </svg>

        {/* ── Center disc ── */}
        <motion.div
          style={{
            position: "absolute",
            width: centerR * 2,
            height: centerR * 2,
            top: cy - centerR,
            left: cx - centerR,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#1e7fe0 0%,#0b4da3 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 32px rgba(30,127,224,0.35)",
            zIndex: 3,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <span
            style={{
              color: "white",
              fontWeight: 800,
              fontSize: size * 0.045,
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            OUR
            <br />
            USPS
          </span>
        </motion.div>

        {/* ── Small icon circles + labels ── */}
        {MOBILE_STEPS.map((step, i) => {
          const angleDeg = RADIAL_ANGLES_DEG[i];
          const rad = (angleDeg * Math.PI) / 180;
          const baseVerticalNudge = 1;
          const verticalNudge =
            step.title === "Tailored Solutions"
              ? baseVerticalNudge
              : baseVerticalNudge + 2;
          const scx = cx + Math.cos(rad) * outerR;
          const scy = cy + Math.sin(rad) * outerR + verticalNudge;
          const Icon = step.icon;

          // Label placement: push away from center
          const labelPad =
            smallR + 28 + (step.title === "Tailored Solutions" ? 1 : 0);
          const lx = cx + Math.cos(rad) * (outerR + labelPad);
          const ly = cy + Math.sin(rad) * (outerR + labelPad) + verticalNudge;

          // Determine text-align and horizontal anchor based on angle quadrant
          const deg = ((angleDeg % 360) + 360) % 360;
          const isRight = deg < 90 || deg > 270;
          const isLeft = deg > 90 && deg < 270;
          const textAlign = isRight ? "left" : isLeft ? "right" : "center";
          const labelLeft = isRight ? lx : isLeft ? lx - lblW : lx - lblW / 2;
          const labelTop = ly - 8;

          return (
            <React.Fragment key={step.id}>
              {/* Icon disc */}
              <motion.div
                style={{
                  position: "absolute",
                  width: smallD,
                  height: smallD,
                  top: scy - smallR,
                  left: scx - smallR,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#1e7fe0,#0b4da3)",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 3px 10px rgba(30,127,224,0.25)",
                  zIndex: 2,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.08,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <Icon c="white" />
              </motion.div>

              {/* Label */}
              <motion.div
                style={{
                  position: "absolute",
                  width: lblW,
                  left: labelLeft,
                  top: labelTop,
                  textAlign: textAlign as "left" | "right" | "center",
                  zIndex: 4,
                  pointerEvents: "none",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              >
                <p
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: 9,
                    lineHeight: 1.3,
                    color: "#111827",
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: 7.5,
                    lineHeight: 1.25,
                    color: "#6b7280",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// RESPONSIVE WRAPPER — renders correct layout per screen size
// ─────────────────────────────────────────────────────────────────────────────
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return mobile;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function EdgeAnimation() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        width: "100%",
        background: "white",
        padding: "40px 16px 48px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? 28 : 40 }}>
        <motion.h2
          style={{
            fontSize: "clamp(22px,4vw,38px)",
            fontWeight: 800,
            color: "#111827",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The <span style={{ color: "#1a6fd4" }}>Accredian Edge</span>
        </motion.h2>
        <motion.p
          style={{
            marginTop: 8,
            fontSize: "clamp(13px,2vw,16px)",
            color: "#9ca3af",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Key Aspects of{" "}
          <span style={{ color: "#1a6fd4", fontWeight: 500 }}>
            Our Strategic Training
          </span>
        </motion.p>
      </div>

      {/* Layout switch */}
      <AnimatePresence mode="wait">
        {isMobile ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MobileView />
          </motion.div>
        ) : (
          <motion.div
            key="desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DesktopView />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
