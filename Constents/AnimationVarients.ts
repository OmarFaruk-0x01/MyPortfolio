import { Variants } from "framer-motion";

export const FadeIn: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
};
export const FadeOut: Variants = {
  visible: {
    opacity: 0,
  },
  hidden: { opacity: 1 },
  exit: { opacity: 1 },
};

export const SlideFromLeft: Variants = {
  visible: {
    transform: "translateX(0px)",
  },
  hidden: {
    transform: "translateX(-30px)",
  },
};
