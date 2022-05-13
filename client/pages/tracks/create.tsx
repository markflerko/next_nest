import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <TextField style={{ marginTop: 10 }} label={"Название трека"} />
        )}
        {activeStep === 1 && (
          <FileUpload file={""} setFile={() => {}} accept={"image/*"}>
            <Button>Загрузить изображение</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <TextField
            style={{ marginTop: 10 }}
            label={"Слова к треку"}
            multiline
            rows={3}
          />
        )}
      </StepWrapper>
      <Grid container justifyContent={"space-between"}>
        <Button onClick={back} disabled={activeStep === 0}>
          Назад
        </Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
