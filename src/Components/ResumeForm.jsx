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
      education: [
        { school: "", degree: "", city: "", startDate: "", endDate: "" },
      ],
      skills: [{ skill: "" }],
      experience: [
        { jobTitle: "", Company: "", city: "", startDate: "", endDate: "" },
      ],
    },
  });
  const [selectedTab, setSelectedTab] = useState(0);

  const {
    fields: socialFields,
    append: appendSocial,
    remove: removeSocial,
  } = useFieldArray({
    control,
    name: "socialLinks",
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });
  const {
    fields: experienceFields,
    append: appendexperience,
    remove: removeexperience,
  } = useFieldArray({
    control,
    name: "experience",
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
            )}
            {selectedTab === 1 && (
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ marginTop: "1rem" }}
                >
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
            )}
            {selectedTab === 2 && (
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ marginTop: "1rem" }}
                >
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
            )}
            {selectedTab === 3 && (
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
                      <IconButton onClick={() => removeexperience(index)}>
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
                    appendexperience({
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
