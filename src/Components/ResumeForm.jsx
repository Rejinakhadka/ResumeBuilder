import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Button,
  Container,
  TextField,
  Typography,
  Tabs,
  Tab,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const ResumeForm = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      socialLinks: [
        { platform: "GitHub", url: "" },
        { platform: "LinkedIn", url: "" },
        { platform: "Website", url: "" },
      ],
    },
  });
  const [selectedTab, setSelectedTab] = useState(0);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    console.log(data, "Form Data");
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Resume Builder
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={selectedTab}
          onChange={handleTabChange}
          sx={{ borderRight: 1, borderColor: "divider", minWidth: "200px" }}
        >
          <Tab label="About" />
          <Tab label="Education" />
          <Tab label="Skills" />
          <Tab label="Experience" />
          <Tab label="Achievements" />
          <Tab label="Projects" />
        </Tabs>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            {selectedTab === 0 && (
              <>
                <Box sx={{ display: "flex", gap: "1rem" }}>
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
                      <TextField
                        {...field}
                        label="Last Name"
                        fullWidth
                        margin="normal"
                      />
                    )}
                  />
                </Box>

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      fullWidth
                      margin="normal"
                    />
                  )}
                />
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Controller
                    name="phoneno"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Phone No"
                        fullWidth
                        margin="normal"
                      />
                    )}
                  />
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Address"
                        fullWidth
                        margin="normal"
                      />
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

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ marginTop: "1rem" }}
                >
                  Social Links
                </Typography>
                {fields.map((item, index) => (
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
                    <IconButton onClick={() => remove(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={() => append({ platform: "", url: "" })}
                >
                  Add Social Link
                </Button>
              </>
            )}
            {selectedTab === 1 && (
              <Controller
                name="education"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Education"
                    fullWidth
                    margin="normal"
                  />
                )}
              />
            )}
            {selectedTab === 2 && (
              <Controller
                name="skills"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Skills"
                    fullWidth
                    margin="normal"
                  />
                )}
              />
            )}
            {selectedTab === 3 && (
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Experience"
                    fullWidth
                    margin="normal"
                  />
                )}
              />
            )}
            {selectedTab === 4 && (
              <Controller
                name="achievements"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Achievements"
                    fullWidth
                    margin="normal"
                  />
                )}
              />
            )}
            {selectedTab === 5 && (
              <Controller
                name="projects"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Projects"
                    fullWidth
                    margin="normal"
                  />
                )}
              />
            )}
          
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ResumeForm;