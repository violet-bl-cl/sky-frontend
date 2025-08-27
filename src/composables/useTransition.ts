import type { Transition } from "../interface/Transition";
type TransitionKey = "CrossFade";
export const useTransition = () => {
  const TRANSITION_DEFENITION: Transition[] = [
    {
      transition: {
        enterActiveClass: "transition-opacity duration-300 ease-out",
        leaveActiveClass: "transition-opacity duration-300 ease-out",
        enterFromClass: "opacity-0",
        leaveFromClass: "opacity-100",
        enterToClass: "opacity-100",
        leaveToClass: "opacity-0",
      },
      duration: 0,
      name: "CrossFade",
    },
  ];
  const getTransitionClasses = (transitionName: TransitionKey) => {
    const definition = TRANSITION_DEFENITION.find(
      (def) => def.name === transitionName
    );
    if (definition) {
      return definition;
    }
    return null;
  };
  return { getTransitionClasses };
};
