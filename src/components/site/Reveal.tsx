import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
} & Omit<HTMLMotionProps<"div">, "children">;

const EASE = [0.22, 1, 0.36, 1] as const;

/** Restrained fade-and-rise on scroll. Movement is removed for reduced-motion users. */
export function Reveal({ children, delay = 0, y = 28, className, as = "div", ...rest }: Props) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
