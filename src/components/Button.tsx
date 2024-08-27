'use client'
import { ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <motion.button
      className="rounded bg-semiblack px-5 py-1 text-semiwhite"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
export default Button;
