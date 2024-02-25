import React from 'react';
import './project.css';

const Project = () => {
  return (
    <div className="projectContainer" id='projects'>
    <h1 className='projectname'>Projects</h1>
      <div className="projectDetail">
        <div className="projectItem">
          <h3 className="title">Gatepass Management System</h3>
          <p className="description">The project Gatepass Management system is to record the hostel students in-out details using web-based application. This System assists the warden to manage all the hostel students' details.</p>
        </div>
        <div className="projectItem">
          <h3 className="title">Weather App</h3>
          <p className="description">The weather app is a web application that allows users to check the current weather conditions of a specific location. Users can input the name of a city or their current location, and the app will fetch and display the corresponding weather information.</p>
        </div>
        <div className="projectItem">
          <h3 className="title">TO-DO List App</h3>
          <p className="description">The To-Do List App is a simple web application that allows users to create, manage, and organize their tasks or to-do items. Users can add tasks, mark them as completed, edit or delete them as needed, and organize tasks into categories or lists.</p>
        </div>
        <div className="projectItem">
          <h3 className="title">DDoS Attack Prediction System</h3>
          <p className="description">DDoS attacks are types of cyber attacks that can cause significant damage to businesses and organizations. Hence, a system is proposed to predict the attacks using machine learning algorithms.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
