import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Box, Button, Typography, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const EducationTab = ({ control, educationFields, appendEducation, removeEducation }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem" }}>
        Education
      </Typography>

      {educationFields.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" gutterBottom>
              School/Institute
            </Typography>
            <IconButton onClick={() => removeEducation(index)}>
              <DeleteIcon />
            </IconButton>
          </div>

          <Controller
            name={`education[${index}].school`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="School Name" fullWidth />
            )}
          />
          <Controller
            name={`education[${index}].degree`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Degree" fullWidth />
            )}
          />
          <Controller
            name={`education[${index}].city`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="City" fullWidth />
            )}
          />
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Controller
              name={`education[${index}].startDate`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              )}
            />
            <Controller
              name={`education[${index}].endDate`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              )}
            />
          </Box>
        </Box>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() =>
          appendEducation({
            school: "",
            degree: "",
            city: "",
            startDate: "",
            endDate: "",
          })
        }
      >
        Add Education
      </Button>
    </>
  );
};

export default EducationTab;
