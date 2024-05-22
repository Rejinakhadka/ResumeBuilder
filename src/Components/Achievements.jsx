import React from "react";
import {  TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Box, Button, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const AchievementsTab = ({ control, achievementsFields, appendAchievements, removeAchievements }) => {
  return (
    <>
      {achievementsFields.map((item, index) => (
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
              Achievements
            </Typography>
            <IconButton onClick={() => removeAchievements(index)}>
              <DeleteIcon />
            </IconButton>
          </div>

          <Controller
            name={`achievements[${index}].title`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Title" fullWidth />
            )}
          />
          <Controller
            name={`achievements[${index}].description`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
               
                fullWidth
                multiline
                rows={4}
              />
            )}
          />
        </Box>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() =>
          appendAchievements({
            title: "",
            description: "",
          })
        }
      >
        Add Achievements
      </Button>
    </>
  );
};

export default AchievementsTab;
