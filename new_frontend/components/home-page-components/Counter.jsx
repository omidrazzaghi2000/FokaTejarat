import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ from = 0, to, duration = 2, prefix = "", suffix = "" }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const node = nodeRef.current;
    
    // Initial render
    node.textContent = `${prefix}${from}${suffix}`;

    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          // Format number to locale string for better readability if needed, 
          // or just Math.round. 
          // Since we want Persian numbers eventually, we might handle that.
          // But for now let's stick to simple numbers or use toLocaleString('fa-IR') if required.
          // The user asked to translate to Persian, so Persian digits are preferred.
          const rounded = Math.round(value);
          const formatted = rounded.toLocaleString('fa-IR');
          node.textContent = `${prefix}${formatted}${suffix}`;
        },
      });

      return () => controls.stop();
    }
  }, [from, to, duration, inView, prefix, suffix]);

  return <span ref={nodeRef} />;
};

export default Counter;
