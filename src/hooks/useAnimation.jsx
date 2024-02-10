import { animated, useTransition } from "@react-spring/web";

const useAnimations = () => {
  const pageTransitions = (key) =>
    useTransition(key, {
      from: { opacity: 1 },
      enter: { opacity: 1 },
      leave: { opacity: 1 },
      exitBeforeEnter: true,
    });
  return { animated, pageTransitions };
};

export default useAnimations;
