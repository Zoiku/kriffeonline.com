import { useState } from "react";
import { eventCheckoutSteps } from "../utils/event";

const useEventCheckout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const handleNextStep = () => {
    if (activeStep < eventCheckoutSteps.length) {
      setActiveStep(activeStep + 1);
    }
  };
  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return {
    activeStep,
    handleNextStep,
    handlePreviousStep,
    steps: eventCheckoutSteps,
  };
};

export default useEventCheckout;
