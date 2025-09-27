// import { useState } from 'react'
import NavBar from "./layouts/Navigation.jsx";
import SplashScreen from "./components/NameAnimation.jsx";
import Search from "./components/Search.jsx";
import Projects from "./components/Projects.jsx";

function App() {

    const projectList = [
        {id: 1, title: 'One', description: 'One time'},
        {id: 2, title: 'Two', description: 'Twice the x'},
        {id: 3, title: 'Three', description: 'Triplets'},
    ]

  return (
    <div className="border-1 border-blue-500">
        <SplashScreen />
        <NavBar />
        <Search />
        <div>
            <h1>Projects</h1>
            {projectList.map((project, index) => (
                <Projects key={project.id}
                          title={project.title}
                          description={project.description}
                          reverse={index % 2 === 1}/>
            ))}
        </div>
        <div className="border-1 border-orange-500">Bottom</div>
          {/*Bottom of the page Contact  */}
    </div>
  )
}

export default App
