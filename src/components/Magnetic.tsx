import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";

interface MagneticProps extends Omit<HTMLMotionProps<"div">, "onPointerLeave" | "onPointerMove"> {
  strength?: number;
}

export function Magnetic({
  children,
  className,
  strength = 0.16,
  style,
  ...props
}: MagneticProps) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.15 });
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.15 });

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * strength);
    y.set((event.clientY - bounds.top - bounds.height / 2) * strength);
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      {...props}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      style={{ ...style, x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
