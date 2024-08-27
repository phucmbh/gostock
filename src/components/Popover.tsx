import {
  useFloating,
  autoUpdate,
  FloatingPortal,
  arrow,
  offset,
  Placement,
} from "@floating-ui/react";
import { ReactNode, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  children: ReactNode;
  popoverParent: ReactNode;
  initialOpen?: boolean;
  placement?: Placement;
};

const Popover = ({
  children,
  popoverParent,
  initialOpen = false,
  placement = "bottom-end",
}: Props) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const id = useId();

  const { refs, x, y, strategy, middlewareData } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(15)],
  });

  return (
    <div
      ref={refs.setReference}

      onClick={() => setIsOpen(!isOpen)}
    >
      {popoverParent}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                transformOrigin: `${middlewareData.arrow?.x}px top`,
              }}
              className="shadow-md z-[100]"
              initial={{ opacity: 0, transform: "scale(0)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              exit={{ opacity: 0, transform: "scale(0)" }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </div>
  );
};
export default Popover;
