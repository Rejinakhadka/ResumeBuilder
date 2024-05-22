import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button, Container, Typography, Tabs, Tab, Box } from "@mui/material";
import AboutTab from "./About";
import EducationTab from "./Education";
import SkillsTab from "./Skills";
import ExperienceTab from "./Experience";
import AchievementsTab from "./Achievements";
import ProjectsTab from "./Project";

import ResumePreview from "./ResumePreview";

const ResumeForm = ({ onSubmit }) => {
  const { handleSubmit, control, watch } = useForm({
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
      projects: [{ title: "", description: "", link: "" }],
      achievements: [{ title: "", description: "" }],
    },
  });
  const [selectedTab, setSelectedTab] = useState(0);
  const [image, setImage] = useState(null);

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
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experience",
  });
  const {
    fields: achievementsFields,
    append: appendAchievements,
    remove: removeAchievements,
  } = useFieldArray({
    control,
    name: "achievements",
  });

  const {
    fields: projectFields,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control,
    name: "projects",
  });

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Box sx={{ display: "flex", gap: "0px" }}>
        <Box
          sx={{
            display: "flex",
            width: "40%",
            gap: "30px",
            backgroundColor: "ThreeDHighlight",
            padding: "1rem",
          }}
        >
          <Box>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={selectedTab}
              onChange={handleTabChange}
              sx={{ borderRight: 1, borderColor: "divider", width: "130px" }}
            >
              <Tab label="About" />
              <Tab label="Education" />
              <Tab label="Skills" />
              <Tab label="Experience" />
              <Tab label="Achievements" />
              <Tab label="Projects" />
            </Tabs>
          </Box>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              {selectedTab === 0 && (
                <AboutTab
                  socialFields={socialFields}
                  appendSocial={appendSocial}
                  removeSocial={removeSocial}
                  control={control}
                  image={image}
                  setImage={setImage}
                />
              )}
              {selectedTab === 1 && (
                <EducationTab
                  educationFields={educationFields}
                  appendEducation={appendEducation}
                  removeEducation={removeEducation}
                  control={control}
                />
              )}
              {selectedTab === 2 && (
                <SkillsTab
                  skillFields={skillFields}
                  appendSkill={appendSkill}
                  removeSkill={removeSkill}
                  control={control}
                />
              )}
              {selectedTab === 3 && (
                <ExperienceTab
                  experienceFields={experienceFields}
                  appendExperience={appendExperience}
                  removeExperience={removeExperience}
                  control={control}
                />
              )}
              {selectedTab === 4 && (
                <AchievementsTab
                  achievementsFields={achievementsFields}
                  appendAchievements={appendAchievements}
                  removeAchievements={removeAchievements}
                  control={control}
                />
              )}
              {selectedTab === 5 && (
                <ProjectsTab
                  projectFields={projectFields}
                  appendProject={appendProject}
                  removeProject={removeProject}
                  control={control}
                />
              )}
            </form>
          </Box>
        </Box>
        <Box sx={{ width: "60%" }}>
          <Box sx={{ height: "100vh", overflow: "auto" }}>
            <ResumePreview data={watch()}  /> 
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ResumeForm;
