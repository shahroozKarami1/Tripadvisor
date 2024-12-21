import { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import FirstStep from "../../components/CompTripBuilder/FirstStep";
import FinishStep from "../../components/CompTripBuilder/FinishStep";
import SecoundStep from "../../components/CompTripBuilder/SecoundStep";
import ThirdStep from "../../components/CompTripBuilder/ThirdStep";

const steps = ["مرحله اول", "مرحله دوم", "مرحله سوم", "مرحله چهار"];

const TripBuilder = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Grid container justifyContent={"center"}>
        <Grid size={{ md: 9 }}>
          <Box sx={{ width: "100%", p: 2 }}>
            <Stepper activeStep={activeStep} sx={{ paddingY: "2rem " }}>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ mt: 2 }}>
              <>
                <Box>
                  {activeStep === 1 && (
                    <FirstStep changePageHandler={handleNext} />
                  )}
                  {activeStep === 2 && <SecoundStep />}
                  {activeStep === 3 && <ThirdStep />}
                  {activeStep === 4 && <FinishStep />}
                </Box>
                <Box
                  sx={{ mt: 4 }}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  gap={1}
                >
                  <Button
                    disabled={activeStep === 1}
                    onClick={handleBack}
                    sx={{ mr: 1, color: "#444" }}
                  >
                    مرحله قبل
                  </Button>
                  {activeStep === steps.length ? (
                    <Button
                      sx={{ bgcolor: "#000" }}
                      variant="contained"
                    >
                      ارسال
                    </Button>
                  ) : (
                    <Button
                      sx={{ bgcolor: "#000" }}
                      variant="contained"
                      onClick={handleNext}
                    >
                      مرحله بعد
                    </Button>
                  )}
                </Box>
              </>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TripBuilder;
