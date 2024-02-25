
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skill from './components/skills/Skill';
import Project from './components/project/Project';
import { Contact } from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
