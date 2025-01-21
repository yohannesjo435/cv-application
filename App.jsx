import PersonalDetails from "./src/Components/PersonalDetails/PersonalDetails";
import "./src/Components/PersonalDetails/PersonalDetails.css"
import "./app.css"
import Resume from "./src/Components/resume/resume";
import "./src/Components/resume/Resume.css"
import EducationalExperience from "./src/Components/Educational/EducationalExperience";
import "./src/Components/Educational/EducationalExperience.css"
import Experience from "./src/Components/Experience/Experience";
import "./src/Components/Experience/Experience.css";
import ClearAndDemo from "./src/Components/ClearAndDemo/ClearAndDemo";
import "./src/Components/ClearAndDemo/ClearAndDemo.css"
import { useState } from "react";

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    {fullName: '', email: '', phone: '', address: ''}
  )

  const [educationalDetails, setEducationalDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([])
  const handleEducationBackground = (updateEducations) => {
    setEducationalDetails(updateEducations)
  }
  const handleDetailsChange = (details) => {
    setPersonalDetails(details)
  }
  const handleExperienceOnChange = (expDetail) => {
    setExperienceDetails(expDetail) 
  }

  const handleClear = () => {
    setPersonalDetails({
      fullName: "",
      email: "",
      phone: "",
      address: "",
    })
    setEducationalDetails([])
    setExperienceDetails([])
    console.log("personalDetails")
  }

  return (
  <div className="app">  

    <div className="edit-side">
      <ClearAndDemo
        onClear={handleClear}
      ></ClearAndDemo>
      <PersonalDetails 
        onChange={handleDetailsChange}>
      </PersonalDetails>
      
      <EducationalExperience
        EducationOnChange={handleEducationBackground}>
      </EducationalExperience>

      <Experience experienceOnChange={handleExperienceOnChange}></Experience>
    </div>

    <div className="resume-container">
      <Resume 
        personalDetails={personalDetails} 
        educationalDetails={educationalDetails}
        experienceDetails={experienceDetails}
        >
        </Resume>
    </div>

  </div>
  )
}


export default App;