import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode = "default" | "link" | "button" | "view";

function getCursorMode(target: EventTarget | null): CursorMode {
  if (!(target instanceof Element)) {
    return "default";
  }

  if (target.closest('[data-cursor="view"]')) {
    return "view";
  }

  if (target.closest("button, [role=button], input, select, textarea")) {
    return "button";
  }

  if (target.closest("a")) {
    return "link";
  }

  return "default";
}

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 520, damping: 42, mass: 0.14 });
  const springY = useSpring(y, { stiffness: 520, damping: 42, mass: 0.14 });

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 761px)");
    const syncPointerSupport = () => {
      const enabled = pointerQuery.matches && !shouldReduceMotion;
      setIsEnabled(enabled);
      document.body.classList.toggle("has-custom-cursor", enabled);
    };
    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        x.set(event.clientX);
        y.set(event.clientY);
      }
    };
    const updateCursorMode = (event: PointerEvent) => {
      const target = event.type === "pointerout" && event.relatedTarget instanceof Element
        ? event.relatedTarget
        : event.target;
      setMode(getCursorMode(target));
    };

    syncPointerSupport();
    pointerQuery.addEventListener("change", syncPointerSupport);
    window.addEventListener("resize", syncPointerSupport, { passive: true });
    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerover", updateCursorMode);
    document.addEventListener("pointerout", updateCursorMode);

    return () => {
      pointerQuery.removeEventListener("change", syncPointerSupport);
      window.removeEventListener("resize", syncPointerSupport);
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", updateCursorMode);
      document.removeEventListener("pointerout", updateCursorMode);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [shouldReduceMotion, x, y]);

  if (!isEnabled) {
    return null;
  }

  return (
    <motion.div
      className={`custom-cursor custom-cursor--${mode}`}
      aria-hidden="true"
      style={{ x: shouldReduceMotion ? x : springX, y: shouldReduceMotion ? y : springY }}
    >
      {mode === "view" && <span className="custom-cursor__label">VIEW</span>}
    </motion.div>
  );
}
