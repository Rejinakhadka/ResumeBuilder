import React from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  CheckCircleOutline,
} from "@mui/icons-material"; // Import icons
import { useImageContext } from "./context/Imagecontext";

// Import icons for social media platforms
import {
  Instagram,
  LinkedIn,
  GitHub,
  Language,
  Twitter,
} from "@mui/icons-material";

const ResumePreview = ({ data }) => {
  const { image } = useImageContext();
  return (
    <Container
      sx={{
        padding: "20px",
      }}
    >
      <Box display="flex" alignItems="center">
        <Avatar src={image} sx={{ width: 100, height: 100 }} />
        <Box ml={2}>
          <Typography variant="h4">
            {data.firstName} {data.lastName}
          </Typography>
          <Typography variant="body1">{data.summary}</Typography>
        </Box>
      </Box>
      <Divider sx={{ marginTop: "20px" }} />
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" display="flex" alignItems="center">
              <Email sx={{ mr: 1 }} /> {data.email}
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center">
              <Phone sx={{ mr: 1 }} /> {data.phoneno}
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center">
              <LocationOn sx={{ mr: 1 }} /> {data.address}
            </Typography>

            {data.socialLinks.map((link, index) => (
              <Typography
                key={index}
                variant="body1"
                display="flex"
                alignItems="center"
              >
                <Box component="span" mr={1}>
                  {/* Icon for social media platform */}
                  {link.platform === "Instagram" && <Instagram />}
                  {link.platform === "LinkedIn" && <LinkedIn />}
                  {link.platform === "Github" && <GitHub />}
                  {link.platform === "Website" && <Language />}
                  {link.platform === "Twitter" && <Twitter />}
                </Box>
                {link.url}
              </Typography>
            ))}
          </Grid>
          {/* Experience */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Work Experience
            </Typography>
            {data.experience.map((exp, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
                  {exp.jobTitle}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                  {exp.startDate} - {exp.endDate}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                  {exp.company} l {exp.location}
                </Typography>
                <Typography variant="body2">{exp.description}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
      {/* Divider */}
      <Divider sx={{ my: 4 }} />
      {/* Education */}
      <Box sx={{ color: "black" }}>
        <Typography variant="body1">Education:</Typography>
        {data.education.map((edu, index) => (
          <Typography key={index} variant="body1">
            {edu.degree} in {edu.fieldOfStudy} from {edu.school} (
            {edu.startDate} - {edu.endDate})
          </Typography>
        ))}
      </Box>
      {/* Divider */}
      <Divider sx={{ my: 4 }} />
      {/* Skills */}
      <Typography variant="body1">Skills:</Typography>
      <List>
        {data.skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleOutline />
            </ListItemIcon>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 4 }} />
      {/* Achievements */}
      <Box>
        <Typography variant="body1">Achievements:</Typography>
        {data.achievements.map((achievement, index) => (
          <Typography key={index} variant="body1">
            {achievement.title}: {achievement.description}
          </Typography>
        ))}
      </Box>
      {/* Divider */}
      <Divider sx={{ my: 4 }} />
      {/* Projects */}
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Projects
        </Typography>
        {data.projects.map((project, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
              {project.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {project.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "blue" }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ResumePreview;
