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
  const [reseted, setRested] = useState(false)
  const [personalDetails, setPersonalDetails] = useState()

  const [educationalDetails, setEducationalDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([])
  const handleEducationBackground = (updateEducations) => {
    setEducationalDetails(updateEducations)
    setRested(false)
    // console.log(updateEducations)
  }
  const handleDetailsChange = (details) => {
    setRested(false)
    setPersonalDetails(details)
  }
  const handleExperienceOnChange = (expDetail) => {
    setRested(false)
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
    setRested(true)
    console.log("personalDetails")
  }


  return (
  <div className="app">  

    <div className="edit-side">
      <ClearAndDemo
        onClear={handleClear}
      ></ClearAndDemo>
      <PersonalDetails 
        isReseted={reseted}
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