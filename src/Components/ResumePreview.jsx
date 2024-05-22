import React from "react";
import {
  Container,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  CheckCircleOutline,
} from "@mui/icons-material";
import { useImageContext } from "./context/Imagecontext";

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={image} sx={{ width: 100, height: 100 }} />
        <div style={{ marginLeft: 16 }}>
          <Typography variant="h4">
            {data.firstName} {data.lastName}
          </Typography>
          <Typography variant="body1">{data.summary}</Typography>
        </div>
      </div>
      <Divider sx={{ marginTop: "20px" }} />
      <div style={{ display: "flex", marginTop: 16 }}>
        <div style={{ width: "30%" }}>
          <div style={{ marginBottom: 24 }}>
         

            <Typography variant="body1" display="flex" alignItems="center">
              <Email sx={{ marginRight: 1 }} /> {data.email}
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center">
              <Phone sx={{ marginRight: 1 }} /> {data.phoneno}
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center">
              <LocationOn sx={{ marginRight: 1 }} /> {data.address}
            </Typography>
           
            {data.socialLinks.map((link, index) => (
              <Typography
                key={index}
                variant="body1"
                display="flex"
                alignItems="center"
              >
                <span style={{ marginRight: 4 }}>
                  {link.platform === "Instagram" && <Instagram />}
                  {link.platform === "LinkedIn" && <LinkedIn />}
                  {link.platform === "Github" && <GitHub />}
                  {link.platform === "Website" && <Language />}
                  {link.platform === "Twitter" && <Twitter />}
                </span>
                {link.url}
              </Typography>
            ))}
          </div>
          <div>
          <Box sx={{ color: "black" }}>
        <Typography variant="h6" sx={{ marginBottom: 2, backgroundColor: "#f2f2f2", padding: "8px", borderRadius: "10px",width:"150px"}}>
          Education
        </Typography>
        {data.education.map((edu, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
              {edu.degree}
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
              {edu.school} / {edu.city}
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
              {edu.startDate} - {edu.endDate}
            </Typography>
          </Box>
        ))}
      </Box>
          </div>

          <div>
          <Typography variant="h6" sx={{ marginBottom: 2, backgroundColor: "#f2f2f2", padding: "8px", borderRadius: "10px", width:"150px" }}>
              Skills
            </Typography>
            <List>
              {data.skills.map((skillObj, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutline />
                  </ListItemIcon>
                  <ListItemText primary={skillObj.skill} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />

        <div style={{ marginLeft: 16, width: "70%" }}>
          <div style={{ marginBottom: 24 }}>
            <Typography variant="h6" sx={{ marginBottom: 2, backgroundColor: "#f2f2f2", padding: "8px", borderRadius: "10px",width:"250px" }}>
              Work Experience
            </Typography>
            {data.experience.map((exp, index) => (
              <div key={index} style={{ marginBottom: 16 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {exp.jobTitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "gray", marginBottom: 1 }}
                >
                  {exp.startDate} - {exp.endDate}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "gray", marginBottom: 1 }}
                >
                  {exp.Company} l {exp.city}
                </Typography>
                <Typography variant="body2">{exp.description}</Typography>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <Typography variant="h6" sx={{marginBottom: 2, backgroundColor: "#f2f2f2", padding: "8px", borderRadius: "10px",width:"250px"}}>
              Achievements
            </Typography>
            {data.achievements.map((ach, index) => (
              <div key={index} style={{ marginBottom: 16 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {ach.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "gray", marginBottom: 1 }}
                >
                  {ach.description}
                </Typography>
              </div>
            ))}
          </div>

          <div>
            <Typography variant="h6" sx={{ marginBottom: 2, backgroundColor: "#f2f2f2", padding: "8px", borderRadius: "10px",width:"250px"}}>
              Projects
            </Typography>
            {data.projects.map((project, index) => (
              <div key={index} style={{ marginBottom: 16 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "blue" }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link}
                  </a>
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResumePreview;
