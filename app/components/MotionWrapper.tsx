'use client';

import { motion } from "motion/react"
import { ReactNode } from "react";

export interface GestureWrapperProps {
    children?: ReactNode,
    hoverScale?: number,
    tapScale?: number,
}

export const GestureWrapper = ({ children, hoverScale=1.2, tapScale=1 } : GestureWrapperProps) => {
  return (
    <motion.div whileHover={{scale: hoverScale}} whileTap={{scale: tapScale}}>
        {children}
    </motion.div>
  )
}