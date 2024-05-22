import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Container, Box, Typography, Avatar, Grid } from "@mui/material";

const ResumePreview = ({ data }) => {
  const componentRef = useRef();
  //   const handlePrint = useReactToPrint({
  //     content: () => componentRef.current,
  //   });

  //   useEffect(() => {
  //     handlePrint();
  //   }, [handlePrint]);

  return (
    <Container
      ref={componentRef}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "beige",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <Box display="flex" gap="20px" alignItems="center">
        <Box>
          <Typography variant="h4">
            {data.firstName} {data.lastName}
          </Typography>
          <Typography variant="body1">{data.summary}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "gray",
          height: "30px",
          marginTop: "40px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "gray",
          borderRadius: "25px",
          padding: "20px",
          marginTop: "20px",
          color: "white",
        }}
      >
        <Typography variant="body1">Email: {data.email}</Typography>
        <Typography variant="body1">Phone: {data.phoneno}</Typography>
        <Typography variant="body1">Address: {data.address}</Typography>
        <Typography variant="body1">Social Links:</Typography>
        <Box>
          {data.socialLinks.map((link, index) => (
            <Typography key={index} variant="body1">
              {link.platform}: {link.url}
            </Typography>
          ))}
        </Box>
        <Typography variant="body1">Education:</Typography>
        <Box>
          {data.education.map((edu, index) => (
            <Typography key={index} variant="body1">
              {edu.degree} in {edu.fieldOfStudy} from {edu.school} (
              {edu.startDate} - {edu.endDate})
            </Typography>
          ))}
        </Box>
        <Typography variant="body1">
          Skills: {data.skills.join(", ")}
        </Typography>
        <Typography variant="body1">Experience:</Typography>
        <Box>
          {data.experience.map((exp, index) => (
            <Typography key={index} variant="body1">
              {exp.jobTitle} at {exp.company} ({exp.startDate} - {exp.endDate})
            </Typography>
          ))}
        </Box>
        <Typography variant="body1">Achievements:</Typography>
        <Box>
          {data.achievements.map((achievement, index) => (
            <Typography key={index} variant="body1">
              {achievement.title}: {achievement.description}
            </Typography>
          ))}
        </Box>
        <Typography variant="body1">Projects:</Typography>
        <Box>
          {data.projects.map((project, index) => (
            <Typography key={index} variant="body1">
              {project.title}: {project.description} ({project.link})
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ResumePreview;
