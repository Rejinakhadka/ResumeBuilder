import React from "react";
import {  TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Box, Button, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const ExperienceTab = ({ control, experienceFields, appendExperience, removeExperience }) => {
  return (
    <>
      {experienceFields.map((item, index) => (
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
              Experience
            </Typography>
            <IconButton onClick={() => removeExperience(index)}>
              <DeleteIcon />
            </IconButton>
          </div>

          <Controller
            name={`experience[${index}].jobTitle`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Job Title" fullWidth />
            )}
          />
          <Controller
            name={`experience[${index}].Company`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Company" fullWidth />
            )}
          />
          <Controller
            name={`experience[${index}].city`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="City" fullWidth />
            )}
          />
             <Controller
            name={`experience[${index}].description`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Description" fullWidth  multiline rows={4} />
            )}
          />
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Controller
              name={`experience[${index}].startDate`}
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
              name={`experience[${index}].endDate`}
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
          appendExperience({
            jobTitle: "",
            Company: "",
            city: "",
            startDate: "",
            endDate: "",
          })
        }
      >
        Add Experience
      </Button>
    </>
  );
};

export default ExperienceTab;
