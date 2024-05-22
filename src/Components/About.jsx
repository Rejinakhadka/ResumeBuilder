import React from "react";
import {
  TextField,
  Box,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Controller } from "react-hook-form";
import { useImageContext } from "./context/Imagecontext";

const AboutTab = ({ control, socialFields, appendSocial, removeSocial }) => {
  const { image, setImage } = useImageContext();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
        >
          {image && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Uploaded Image"
                src={image}
                sx={{ marginRight: "1rem" }}
              />
              <IconButton onClick={handleImageDelete}>
                <DeleteIcon />
              </IconButton>
            </Box>
          )}

          <input
            accept="image/*"
            id="image-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
      
            <Button variant="contained" >
              Upload Image
            </Button>
        
        </Box>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Last Name" fullWidth margin="normal" />
          )}
        />
        \
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
      </Box>
    </>
  );
};

export default AboutTab;
