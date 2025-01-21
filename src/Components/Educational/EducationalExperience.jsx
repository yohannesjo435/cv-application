import { useState } from "react";

function EducationalExperience({/*EducationOnChange,*/ handleEducationChange, educations, handleAddEducation, handleSave, handleRemove, handleEdit, handleCancel, isOpen, handleOpen}){

  return (
    <div className="educaiton-wrapper">

      <h3 onClick={handleOpen}>
        Education 
        <img 
          className={`drop-down-icon ${isOpen? "rotate": ""}`} 
          src="src/assets/dropDown2.png"/> 
      </h3>

      {isOpen &&         
        <form className="education-form">

            <button type="button" className="add-education" onClick={handleAddEducation}>+ Education</button>

            {educations.map((edu, index)=> (
                edu.isEditing? (
                  <div key={index} className="edu-form-wrapper">
                    <label>School</label>
                    <input 
                      name="school"
                      onChange={(e) => handleEducationChange(index, e)}
                      value={edu.school}
                      />

                    <label>Degree</label>
                    <input 
                      name="degree"
                      onChange={(e) => handleEducationChange(index, e)}
                      value={edu.degree}
                      />

                    <label>Start Date</label>
                    <input 
                      type="date"
                      name="startDate"
                      onChange={(e) => handleEducationChange(index, e)}
                      value={edu.startDate}
                      />

                    <label>End Date</label>
                    <input 
                      name="endDate"
                      type="date"
                      onChange={(e) => handleEducationChange(index, e)}
                      value={edu.endDate}
                      />

                    <label>Location</label>
                    <input 
                      name="location"
                      onChange={(e) => handleEducationChange(index, e)}
                      value={edu.location}
                    />

                    <button type="button" className="removeBtn" onClick={() => handleRemove(index)}>Remove</button>
                    <button type="button" className="cancelBtn" onClick={() => handleCancel(index)}>Cancel</button>
                    <button type="button" className="saveBtn" onClick={() => handleSave(index)}>save</button>
                  </div>
                ):  (
                  <div key={index} onClick={()=> handleEdit(index)} style={{cursor: "pointer"}}>
                    <p>{edu.school}</p>
                  </div>
                )
              ))
            }
        </form>
      }
    </div>
  )
}

export default EducationalExperience;