import React from "react";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Box, Button, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const SkillsTab = ({ control, skillFields, appendSkill, removeSkill }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem" }}>
        Skills
      </Typography>

      {skillFields.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Controller
            name={`skills[${index}].skill`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Skill" fullWidth />
            )}
          />
          <IconButton onClick={() => removeSkill(index)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => appendSkill({ skill: "" })}
      >
        Add Skill
      </Button>
    </>
  );
};

export default SkillsTab;
