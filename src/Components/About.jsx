import React from "react";
import {  TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Box, Button, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const AboutTab = ({ control,socialFields,appendSocial,removeSocial }) => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="First Name" fullWidth margin="normal" />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Last Name" fullWidth margin="normal" />
          )}
        />
      </Box>

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Email" fullWidth margin="normal" />
        )}
      />
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Controller
          name="phoneno"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Phone No" fullWidth margin="normal" />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Address" fullWidth margin="normal" />
          )}
        />
      </Box>

      <Controller
        name="summary"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Summary"
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        )}
      />

      <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem" }}>
        Social Links
      </Typography>
      {socialFields.map((item, index) => (
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
            name={`socialLinks[${index}].platform`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Platform" fullWidth />
            )}
          />
          <Controller
            name={`socialLinks[${index}].url`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="URL" fullWidth />
            )}
          />
          <IconButton onClick={() => removeSocial(index)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => appendSocial({ platform: "", url: "" })}
      >
        Add Social Link
      </Button>
    </>
  );
};

export default AboutTab;
