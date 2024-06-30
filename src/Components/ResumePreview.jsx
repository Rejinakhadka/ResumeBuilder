import React, { useRef } from "react";
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
  Button,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  CheckCircleOutline,
} from "@mui/icons-material";
import { useImageContext } from "./context/Imagecontext";
import { useReactToPrint } from "react-to-print";
import {
  Instagram,
  LinkedIn,
  GitHub,
  Language,
  Twitter,
} from "@mui/icons-material";

const NavBar = ({ handlePrint }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
      }}
    >
      <Button variant="contained" onClick={handlePrint} sx={{ mt: 2 }}>
        Print CV
      </Button>
    </Box>
  );
};

const ResumePreview = ({ data }) => {
  const { image } = useImageContext();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  console.log(data, "pp");

  return (
    <Container sx={{}}>
      <NavBar handlePrint={handlePrint} />
      <div ref={componentRef} style={{ padding: "2rem" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          {image && <Avatar src={image} sx={{ width: 100, height: 100 }} />}
          <div style={{ marginLeft: 16 }}>
            <Typography variant="h4">
              {data.firstName} {data.lastName}
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontSize: "12px",
                color: "rgb(24, 24, 24)",
                letterSpacing: "0.2px",
                whiteSpace: "pre-wrap",
                width: "10px",
              }}
            >
              {data.summary}
            </Typography>
          </div>
        </div>

        <Divider sx={{ marginTop: "20px" }} />
        <div style={{ display: "flex", marginTop: 16 }}>
          <div style={{ width: "40%" }}>
            <div style={{ marginBottom: 24 }}>
              {data.email && (
                <Typography variant="body1" display="flex" alignItems="center">
                  <Email sx={{ marginRight: 1 }} /> {data.email}
                </Typography>
              )}
              {data.phoneno && (
                <Typography variant="body1" display="flex" alignItems="center">
                  <Phone sx={{ marginRight: 1 }} /> {data.phoneno}
                </Typography>
              )}
              {data.address && (
                <Typography variant="body1" display="flex" alignItems="center">
                  <LocationOn sx={{ marginRight: 1 }} /> {data.address}
                </Typography>
              )}
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
              {data.education.some(
                (edu) => edu.school || edu.city || edu.degree
              ) && (
                <Box sx={{ color: "black" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "#f2f2f2",
                      padding: "8px",
                      borderRadius: "10px",
                      width: "150px",
                    }}
                  >
                    Education
                  </Typography>
                  {data.education.map(
                    (edu, index) =>
                      (edu.school || edu.city || edu.degree) && (
                        <Box key={index} sx={{ mb: 3 }}>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", mb: 1 }}
                          >
                            {edu.degree}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "gray", mb: 1 }}
                          >
                            {edu.school} / {edu.city}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "gray", mb: 1 }}
                          >
                            {edu.startDate} - {edu.endDate}
                          </Typography>
                        </Box>
                      )
                  )}
                </Box>
              )}
            </div>

            {data.skills.some((skillObj) => skillObj.skill) && (
              <div>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: 2,
                    backgroundColor: "#f2f2f2",
                    padding: "8px",
                    borderRadius: "10px",
                    width: "150px",
                  }}
                >
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
            )}
          </div>
          <Divider orientation="vertical" flexItem />

          <div style={{ marginLeft: 16, width: "60%" }}>
            <div>
              {data.experience.some(
                (exp) =>
                  exp.jobTitle ||
                  exp.startDate ||
                  exp.endDate ||
                  exp.Company ||
                  exp.description ||
                  exp.city
              ) && (
                <div style={{ marginBottom: 24 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "#f2f2f2",
                      padding: "8px",
                      borderRadius: "10px",
                      width: "250px",
                    }}
                  >
                    Work Experience
                  </Typography>
                  {data.experience.map(
                    (exp, index) =>
                      (exp.jobTitle ||
                        exp.startDate ||
                        exp.endDate ||
                        exp.Company ||
                        exp.description ||
                        exp.city) && (
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
                            {exp.Company} / {exp.city}
                          </Typography>
                          <Typography variant="body2">
                            {exp.description}
                          </Typography>
                        </div>
                      )
                  )}
                </div>
              )}
            </div>

            <div>
              {data.achievements.some(
                (ach) => ach.title || ach.description
              ) && (
                <div style={{ marginBottom: 24 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "#f2f2f2",
                      padding: "8px",
                      borderRadius: "10px",
                      width: "250px",
                    }}
                  >
                    Achievements
                  </Typography>
                  {data.achievements.map(
                    (ach, index) =>
                      (ach.title || ach.description) && (
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
                      )
                  )}
                </div>
              )}
            </div>

            <div>
              {data.projects.some(
                (project) =>
                  project.title || project.description || project.link
              ) && (
                <div style={{ marginBottom: 24 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "#f2f2f2",
                      padding: "8px",
                      borderRadius: "10px",
                      width: "250px",
                    }}
                  >
                    Projects
                  </Typography>
                  {data.projects.map(
                    (project, index) =>
                      (project.title ||
                        project.description ||
                        project.link) && (
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
                      )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResumePreview;
