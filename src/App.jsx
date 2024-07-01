import React from "react";

import { AppProvider } from "./Components/context/AppContext";
import ResumeForm from "./Components/ResumeForm";
import Navbar from "./Components/Navar";

const App = () => {
  return (
    <AppProvider>
    <Navbar/>
      <ResumeForm />
    </AppProvider>
  );
};

export default App;
