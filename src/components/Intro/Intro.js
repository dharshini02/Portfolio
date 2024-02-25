import React from "react";
import './style.css';
import photo from '../../assets/photo.jpeg'
const Intro=()=>{
    return(
        <section id="intro">
             <img src={photo} alt="photo" className="photo"/>
            <div  className="Introcontent">
               <span className="hello">Hello</span>
               <span className="intro">I'm <span className="name">Dharshini</span> </span>
               <p className="intropara">
               I'm a passionate FrontEnd enthusiast eager to embark on my journey in the world of FrontEnd Development.
            
               <br/>
                I'm excited to apply my skills and knowledge to real-world projects and make meaningful contributions to the industry.
               </p>
            </div>
      
        </section>
        
    )
}
export default Intro;