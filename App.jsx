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
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [clearIsClicked, SetClearIsClicked] = useState(false)
  const [personalDetails, setPersonalDetails] = useState(
    {fullName: '', email: '', phone: '', address: ''}
  )

  const handlePesonalDetails = (name, value) => {
    if (name === "FirstName") setFullName(value)
      if (name === "email") setEmail(value)
      if (name === "phone") setPhone(value)
      if (name === "address") setAddress(value) 
   
  }

  const [educationalDetails, setEducationalDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([])
  const handleEducationBackground = (updateEducations) => {
    setEducationalDetails(updateEducations)
  }
  const handleDetailsChange = (details) => {
    console.log("detials: ", details)
    setPersonalDetails(details)
  }
  const handleExperienceOnChange = (expDetail) => {
    setExperienceDetails(expDetail) 
  }

  const handleClear = () => {
    handleDetailsChange({
      fullName: "",
      email: "",
      phone: "",
      address: "",
    })
    SetClearIsClicked(true)
    setPersonalDetails({
      fullName: " ",
      email: "",
      phone: "",
      address: "",
    })
    
    // handleDetailsChange()
    setEducationalDetails([])
    setExperienceDetails([])
    // console.log("personalDetails")
  }

  return (
  <div className="app">  

    <div className="edit-side">
      <ClearAndDemo
        onClear={handleClear}
      ></ClearAndDemo>
      <PersonalDetails 
        fullName={fullName}
        email={email}
        phone={phone}
        address={address}
        onChange={handleDetailsChange}
        handlePesonalDetails={handlePesonalDetails}
        clearIsClicked={clearIsClicked}
        SetClearIsClicked={SetClearIsClicked}
        >
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