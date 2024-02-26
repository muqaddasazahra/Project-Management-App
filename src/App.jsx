import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import { ContainerWithChildren } from "postcss/lib/container";

function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    projects:[]
})
function handleAddProject()
{
  setProjectState(prevState=>
    {
      return {
        ...prevState,
        selectedProjectId:null
      }

    })
}

let content;
if(projectState.selectedProjectId===null)
content=<NewProject/>
else if(projectState.selectedProjectId===undefined)
content= <NoProjectSelected onAddProject={handleAddProject}/>

  return (
    
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onAddProject={handleAddProject}/>
      {content}
    </main>
    
    
  );
}

export default App;
