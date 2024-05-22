import React from "react";

import { ImageProvider } from "./Components/context/Imagecontext";
import ResumeForm from "./Components/ResumeForm";

const App = () => {
  return (
    <ImageProvider>
      <ResumeForm />
    </ImageProvider>
  );
};

export default App;
