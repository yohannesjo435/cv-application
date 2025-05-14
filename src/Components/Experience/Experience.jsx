import { useState } from "react";
import dropDown2 from "../../assets/dropDown2.png"


function Experience({experience, handleAddExperience, handleExperience, handleRemoveExperience, handleSaveExperience, handleEditExperience, handleCancelExperience}) {
  const [isOpen, setIsOpen] = useState(false)//just left this to handle the drop down

  return (
    <div className="Experience-wrapper">
      <h3 onClick={() => setIsOpen(!isOpen)}>
        Experience 
        <img className="DropDownBtn" src={dropDown2}/>
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
                    onClick={() => handleRemoveExperience(index)}  
                  >
                    
                    Remove
                  </button>

                  <button 
                    type="button" className="cancelBtn"
                    onClick={() => handleCancelExperience(index)}
                    >
                      Cancel
                  </button>

                  <button 
                    type="button" className="saveBtn"
                    onClick={() => handleSaveExperience(index)}
                    >Save</button>
              </div>
            ): (
              <div key={index} onClick={() => handleEditExperience(index)} style={{cursor: "pointer",}}>
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