import React, { useState } from "react";
import ResumeForm from "./Components/ResumeForm";
import Navbar from "./Components/Navar";

const App = () => {
  return (
    <div>
    <Navbar/>
      <ResumeForm />
    </div>
  );
};

export default App;
