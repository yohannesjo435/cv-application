import { useState } from "react";

function Experience({experienceOnChange}) {
  const [experience, setExperience] = useState([])
  const [isOpen, setIsOpen] = useState(false)

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
    experienceOnChange(updateExperience)
  }

  const handleRemove = (index) => {
    const updateExperience = [...experience]
    updateExperience.splice(index, 1)
    setExperience(updateExperience)
    experienceOnChange(updateExperience)
  }

  const handleSave = (index) => {
    //we automaticaly saved the value via handle event
    //so no need to do eaxtra thing here
    const updateExperience = [...experience]
    updateExperience[index].isEditing = false;//to undisplay the form
    setExperience(updateExperience)//just for to set "isEditing to false"
    experienceOnChange(updateExperience)
    console.log("experienceOnChange", experienceOnChange)
  }

  const handleEdit = (index) => {
    const updateExperience = [...experience]
    updateExperience[index].isEditing = true;
    setExperience(updateExperience)
    experienceOnChange(updateExperience)
  }

  const handleCancel = (index) => {
    const updateExperience = [...experience]
    updateExperience[index].isEditing = false;
    setExperience(updateExperience)
    experienceOnChange(updateExperience)
  }

  return (
    <div className="Experience-wrapper">
      <h3 onClick={() => setIsOpen(!isOpen)}>
        Experience 
        <img className="DropDownBtn" src="src\assets\dropDown2.png"/>
      </h3>

      {isOpen && 
        <form className="experience-form">
          <button type="button" className="add-experience" onClick={handleAddExperience} >Add experience</button>

          {experience.map((exp, index)=> (
             exp.isEditing? (
              <div key={index} className="experience-wrapper">
                <label>Company name</label>
                <input 
                  type="text"
                  name="companyName"
                  value={exp.companyName}
                  onChange={(e) => handleExperience(e, index)}
                   />

                <label>Position Title</label>
                <input 
                  type="text" 
                  name="positionTitle"
                  value={exp.positionTitle}
                  onChange={(e) => handleExperience(e, index)}
                  />

                <label>Start Date</label>
                <input 
                  type="date"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleExperience(e, index)}
                  />

                <label>End Date</label>
                <input 
                  type="date" 
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleExperience(e, index)}
                  />

                <label>Location</label>
                <input 
                  type="text"
                  name="location"
                  value={exp.location}
                  onChange={(e) => handleExperience(e, index)}
                  />

                <label>Description</label>
                <textarea 
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleExperience(e, index)}
                  style={{marginBottom: "15px"}}
                  >
                  </textarea>

                  <button 
                    type="button" className="removeBtn"
                    onClick={() => handleRemove(index)}  
                  >
                    
                    Remove
                  </button>

                  <button 
                    type="button" className="cancelBtn"
                    onClick={() => handleCancel(index)}
                    >
                      Cancel
                  </button>

                  <button 
                    type="button" className="saveBtn"
                    onClick={() => handleSave(index)}
                    >Save</button>
              </div>
            ): (
              <div key={index} onClick={() => handleEdit(index)} style={{cursor: "pointer",}}>
                <p>{exp.companyName}</p>
              </div>
            )
          ))}
        </form>

      }
    </div>
  )
}


export default Experience;