// import { useState } from 'react'
import NavBar from "./layouts/Navigation.jsx";
import SplashScreen from "./components/NameAnimation.jsx";
import Projects from "./components/Projects.jsx";
import Main from "./components/Main.jsx";

function App() {

    const projectList = [
        {id: 1, title: 'One', description: 'One time'},
        {id: 2, title: 'Two', description: 'Twice the x'},
        {id: 3, title: 'Three', description: 'Triplets'},
    ]

  return (
    <div className="border border-blue-500 relative">
        <SplashScreen />
        <NavBar />
        <Main />
        <div>
            {projectList.map((project, index) => (
                <Projects key={project.id}
                          title={project.title}
                          description={project.description}
                          reverse={index % 2 === 1}/>
            ))}
        </div>
        <div className="border border-orange-500">Bottom</div>
          {/*Bottom of the page Contact  */}
    </div>
  )
}

export default App
