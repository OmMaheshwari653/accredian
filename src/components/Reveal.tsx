"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
  amount?: number;
};

const Reveal = ({
  children,
  direction = "left",
  delay = 0,
  className,
  amount = 0.25,
}: RevealProps) => {
  const fromX = direction === "left" ? -70 : 70;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
