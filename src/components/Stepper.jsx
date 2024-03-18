import MuiStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import useScreen from "../hooks/useScreen";

const Stepper = ({ activeStep, steps }) => {
  const { isDesktop } = useScreen();
  const orientation = isDesktop ? "horizontal" : "vertical";

  return (
    <MuiStepper orientation={orientation} activeStep={activeStep}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
};

export default Stepper;
