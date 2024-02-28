import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import { ContainerWithChildren } from "postcss/lib/container";
import SelectedProject from "./components/SelectedProject";

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
function handleSaveProject(projectData)
{
setProjectState(prevState=>{
  const newProject={
    ...projectData,
    id:Math.random()
  }
  return {
    ...prevState,
    selectedProjectId:undefined,
    projects:[...prevState.projects, newProject],
   
  }
})
}

function handleCancelProject()
{
  setProjectState(prevState=>
    {
      return {
        ...prevState,
        selectedProjectId:undefined
      }

    })
}

function handleSelectProject(id)
{
  setProjectState(prevState=>
    {
      return {
        ...prevState,
        selectedProjectId:id
      }

    })
}
 
function handleDeleteProject()
{
  setProjectState((prevState)=>
  {
    return   {
      ...prevState,
      selectedProjectId:undefined,
      projects: projectState.projects.filter((project)=>{project.id!==prevState.selectedProjectId})
    }
  })
}
const selectedProject=projectState.projects.find(project=>project.id===projectState.selectedProjectId);

let content=<SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;
if(projectState.selectedProjectId===null)
content=<NewProject onSave={handleSaveProject} onCancel={handleCancelProject}/>
else if(projectState.selectedProjectId===undefined)
content= <NoProjectSelected onAddProject={handleAddProject}/>

  return (
    
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onAddProject={handleAddProject} projects={projectState.projects} onSelectProject={handleSelectProject}/>
      {content}
    </main>
    
    
  );
}

export default App;
