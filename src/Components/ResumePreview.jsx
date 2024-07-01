import React, { useRef } from 'react';
import {
  Container,
  Avatar,
  Divider,
  Box,
  Button,
  Select,
  MenuItem,
} from '@mui/material';
import { useAppContext } from './context/AppContext';
import { useReactToPrint } from 'react-to-print';
import Template1 from './Template1';
import Template2 from './Template2';


const NavBar = ({ handlePrint }) => {
  const { template, setTemplate } = useAppContext();

  const handleChange = (event) => {
    setTemplate(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '20px',
        gap: '15px',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Select
        value={template}
        onChange={handleChange}
        style={{ height: '30px' }}
      >
        <MenuItem value="Template1">Template 1</MenuItem>
        <MenuItem value="Template2">Template 2</MenuItem>
      </Select>
      <Button variant="contained" onClick={handlePrint}>
        Print CV
      </Button>
    </Box>
  );
};

const ResumePreview = ({ data }) => {
  const { image, template } = useAppContext();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Container sx={{ backgroundColor: '#EDF1F6' }}>
      <NavBar handlePrint={handlePrint} />
      <div
        ref={componentRef}
        style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          maxWidth: '800px',
          height: '100vh',
          margin: '0 auto',
          padding: '2rem',
          boxSizing: 'border-box',
        }}
      >
        {template === 'Template1' && <Template1 data={data} image={image} />}
        {template === 'Template2' && <Template2 data={data} image={image} />}
      </div>
    </Container>
  );
};

export default ResumePreview;