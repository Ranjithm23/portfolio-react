import React from "react";
import Header from "./components/Header";
import Topcontainer from "./Topcontainer/Topcontainer";
import SkillContainer from "./SkillContainer/SkillContainer";
import ProjectContainer from "./ProjectContainer/ProjectContainer";
import "./App.css";
import MyProjects from "./Project/MyProjects";
import ExperienceContainer from "./ExperienceContainer/ExperienceContainer";
import Contact from "./Contact/Contact";

const App = () =>{
  return(
    <div>
      <Header />
      <Topcontainer/>
      <SkillContainer />
      <ProjectContainer/>
      {/* <MyProjects /> */}
      <ExperienceContainer />
      <Contact />
    </div>
  );
};

export default App;