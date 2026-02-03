import React from "react";
import { motion } from "framer-motion";

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  transition = { duration: 0.6, ease: "easeInOut" },
  lineProps = {},
  ...props
}) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 2 }
  };
  const center = {
    closed: { opacity: 1 },
    opened: { opacity: 0 }
  };
  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -2 }
  };
  const mergedLineProps = {
    stroke: color,
    strokeWidth: Number(strokeWidth),
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps
  };
  const unitHeight = 5;
  const unitWidth = (unitHeight * Number(width)) / Number(height);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
      className="menu-button m-auto"
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...mergedLineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...mergedLineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...mergedLineProps}
      />
    </motion.svg>
  );
};

export default MenuButton;
