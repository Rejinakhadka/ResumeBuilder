import React from "react";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { IconButton, Box, Button, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const ProjectsTab = ({
  control,
  projectFields,
  appendProject,
  removeProject,
}) => {
  return (
    <>
      {projectFields.map((item, index) => (
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
              Projects
            </Typography>
            <IconButton onClick={() => removeProject(index)}>
              <DeleteIcon />
            </IconButton>
          </div>

          <Controller
            name={`projects[${index}].title`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Project Title" fullWidth />
            )}
          />
          <Controller
            name={`projects[${index}].description`}
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
          <Controller
            name={`projects[${index}].link`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Project Link" fullWidth type="url" />
            )}
          />
        </Box>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => appendProject({ title: "", description: "", link: "" })}
      >
        Add Project
      </Button>
    </>
  );
};

export default ProjectsTab;
