import { useState } from 'react'
import { BrowserRouter as Router, browserHistory, Route, Link, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme';
import Navbar from './pages/Navbar';
import Contactpage from './pages/Contactpage';
import Archievement from './pages/Archievement';
import Education from './pages/Education';
import Quotes1 from './pages/Quotes1';
import Project from './pages/Project';
import Maps from './pages/Maps';
import './App.css';


function App() {

  return (

    <Router>
      <Navbar />
      <Switch>
        <Route path="/Homepage" component={Homepage} />
        <Route path='/Aboutme' component={Aboutme} />
        <Route path='/Archievement' component={Archievement} />
        <Route path="/Project" component={Project} />
        <Route path="/Contactpage" component = {Contactpage}/>
        <Route path="/" />
      </Switch>


    </Router>

    // <div>
    // <header>
    //   <Navbar/>
    // </header>
    //   <Homepage/>
    //   <Aboutme/>
    //   <Quotes1/>
    //   <Education />
    //   <Archievement/>
    //   <Project/>
    //   <Contactpage/>
    //   <Maps/>
    //   </div>
  )
}

export default App;