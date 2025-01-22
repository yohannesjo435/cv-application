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
import "./src/demoInformation.js"
import { useState } from "react";
import demoExample from "./src/demoInformation.js";

function App() {
  const [fullName, setFullName] = useState(demoExample.personalDetails.fullName)
  const [email, setEmail] = useState(demoExample.personalDetails.email)
  const [phone, setPhone] = useState(demoExample.personalDetails.phone)
  const [address, setAddress] = useState(demoExample.personalDetails.address)
 
  const [personalDetails, setPersonalDetails] = useState(
    {
      fullName: demoExample.personalDetails.fullName,
      email: demoExample.personalDetails.email, 
      phone: demoExample.personalDetails.phone, 
      address: demoExample.personalDetails.address
    }
  )//I addded this for resume(it where resume details get stored)//don't ask I know

  function handleChange(e) {
    let {name, value} = e.target

    handleDetailsChange({
      fullName: name === "FirstName"? value: fullName,
      email: name === "email"? value: email,
      phone: name === "phone"? value: phone, 
      address: name === "address" ? value : address
    })
    
    handlePesonalDetails(name, value)
  }

  const handlePesonalDetails = (name, value) => {
    if (name === "FirstName") setFullName(value)
      if (name === "email") setEmail(value)
      if (name === "phone") setPhone(value)
      if (name === "address") setAddress(value) 
   
  }
  const handleDetailsChange = (details) => {
    setPersonalDetails(details)
  }
  /////////////////////////////////////////////////////////////////////////
  const [educations, setEducations] = useState(demoExample.educationalDetails);
  const [isOpen, setIsOpen] = useState(false);//for education drop down

  const [educationalDetails, setEducationalDetails] = useState(demoExample.educationalDetails);//for resume
  console.log(educationalDetails)
  const handleEducationBackground = (updateEducations) => {
    setEducationalDetails(updateEducations)
  }
  const handleEducationChange = (index, e) => {
    const {name, value} = e.target
    const updateEducations = [...educations];

    updateEducations[index][name] = value;
    setEducations(updateEducations);
    handleEducationBackground(updateEducations)//this will pass it to its parent to resume
  }
  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {school: "", degree: "", startDate: "", endDate: "", location: "", isEditing: true
      }
    ]);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleSave = (index) => {
    const updateEducations = [...educations];
    updateEducations[index].isEditing = false;
    setEducations(updateEducations);
    handleEducationBackground(updateEducations)
  }
  const handleRemove = (index) => {
    const updateEducations = [...educations];
    updateEducations.splice(index, 1)
    setEducations(updateEducations);
    handleEducationBackground(updateEducations)
  }

  const handleEdit = (index) => {
    const updateEducations = [...educations];
    updateEducations[index]["isEditing"] = true;
    setEducations(updateEducations)
    handleEducationBackground(updateEducations)
  }
  const handleCancel = (index) => {
    const updateEducations = [...educations];
    updateEducations[index]["isEditing"] = false
    setEducations(updateEducations)
    handleEducationBackground(updateEducations)
  }
  //////////////////////////////////////////////////////////////
  const [experience, setExperience] = useState(demoExample.experienceDetails)
  const [experienceDetails, setExperienceDetails] = useState(demoExample.experienceDetails)

  const handleExperienceOnChange = (expDetail) => {
    setExperienceDetails(expDetail) 
  }
  const handleAddExperience = (e) => {
    e.preventDefault()
    const updateExperience = [...experience,  {
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      isEditing: true
    }]

    setExperience(updateExperience)
  }
  const handleExperience = (e, index) => {
    const {name, value} = e.target
    const updateExperience = [...experience]
    updateExperience[index][name] = value
    setExperience(updateExperience)
    handleExperienceOnChange(updateExperience)//send it resume
  }
  const handleRemoveExperience = (index) => {
    const updateExperience = [...experience]
    updateExperience.splice(index, 1)
    setExperience(updateExperience)
    handleExperienceOnChange(updateExperience)
  }
  const handleSaveExperience = (index) => {
    //we automaticaly saved the value via handle event
    //so no need to do eaxtra thing here
    const updateExperience = [...experience]
    updateExperience[index].isEditing = false;//to undisplay the form
    setExperience(updateExperience)//just for to set "isEditing to false"
    handleExperienceOnChange(updateExperience)
  }
  const handleEditExperience = (index) => {
    const updateExperience = [...experience]
    updateExperience[index].isEditing = true;
    setExperience(updateExperience)
    handleExperienceOnChange(updateExperience)
  }

  const handleCancelExperience = (index) => {
    const updateExperience = [...experience]
    updateExperience[index].isEditing = false;
    setExperience(updateExperience)
    handleExperienceOnChange(updateExperience)
  }
  const handleClear = () => {
    setFullName("")
    setEmail("")
    setPhone("")
    setAddress("")

    //for the resume
    handleDetailsChange({
      fullName: "",
      email: "",
      phone: "",
      address: "",
    })
    
    //the two clears the the main hooks that stores the data
    setEducations([])
    setExperience([])
    //the two remove it from the resume hooks
    setEducationalDetails([])
    setExperienceDetails([])
  }

  function handleLoadDemo() {
    setFullName(demoExample.personalDetails.fullName)
    setEmail(demoExample.personalDetails.email)
    setPhone(demoExample.personalDetails.phone)
    setAddress(demoExample.personalDetails.address)
    setPersonalDetails(
      {
      fullName: demoExample.personalDetails.fullName,
      email: demoExample.personalDetails.email, 
      phone: demoExample.personalDetails.phone, 
      address: demoExample.personalDetails.address
    })//for resume

    setEducations(demoExample.educationalDetails)
    setEducationalDetails(demoExample.educationalDetails)
    
    setExperience(demoExample.experienceDetails)
    setExperienceDetails(demoExample.experienceDetails)



  }

  return (
  <div className="app">  

    <div className="edit-side">
      <ClearAndDemo
        onClear={handleClear}
        handleLoadDemo={handleLoadDemo}
      ></ClearAndDemo>
      <PersonalDetails 
        fullName={fullName}
        email={email}
        phone={phone}
        address={address}
        handlePesonalDetails={handlePesonalDetails}
        handleChange={handleChange}
        >
      </PersonalDetails>
      
      <EducationalExperience
        handleEducationChange={handleEducationChange}
        educations={educations}
        handleAddEducation={handleAddEducation}
        handleSave={handleSave}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
        handleCancel={handleCancel}
        isOpen={isOpen}
        handleOpen={handleOpen}
        >
      </EducationalExperience>

      <Experience 
        experience={experience}
        handleAddExperience={handleAddExperience}
        handleExperience={handleExperience}
        handleRemoveExperience={handleRemoveExperience}
        handleSaveExperience={handleSaveExperience}
        handleEditExperience={handleEditExperience}
        handleCancelExperience={handleCancelExperience}
        >

        </Experience>
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