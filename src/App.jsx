import React from "react";

import { ImageProvider } from "./Components/context/Imagecontext";
import ResumeForm from "./Components/ResumeForm";
import Navbar from "./Components/Navar";

const App = () => {
  return (
    <ImageProvider>
    <Navbar/>
      <ResumeForm />
    </ImageProvider>
  );
};

export default App;
