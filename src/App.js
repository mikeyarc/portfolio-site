import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
     <NavBar/>
     <Intro/>
     <ProjectList/>
     <About/>
     <Contact />
    </Router>
  );
}

export default App;
