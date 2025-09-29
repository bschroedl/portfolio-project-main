// import { useState } from 'react'
import NavBar from "./layouts/Navigation.jsx";
import SplashScreen from "./components/NameAnimation.jsx";
import Main from "./components/Main.jsx";
import ProjectList from "./layouts/ProjectList.jsx";



function App() {
  return (
    <div className="relative bg-[#F5F5F5]">
        <SplashScreen />
        <NavBar />
        <Main />
        <ProjectList />
    </div>
  )
}

export default App
