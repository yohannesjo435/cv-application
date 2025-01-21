import { useState } from "react";

function EducationalExperience({EducationOnChange}){
  const [isOpen, setIsOpen] = useState(false);

  const [educations, setEducations] = useState([]);

  // const handleEducationBackground = (e) => {
  //   const {name, value} = e.target
  //   if(name === "school") setSchool(value);
  //   if (name === "degree") setDegree(value);
  //   if (name === "startDate") setStartDate(value);
  //   if (name === "endDate") setEndDate(value);
  //   if (name === "location")  setLocation(value);

  //   EducationOnChange({
  //     school: name === "school"? value: school,
  //     degree: name === "degree"? value: degree,
  //     startDate: name === "startDate"? value: startDate,
  //     endDate: name === "endDate"? value : endDate,
  //     location: name === "location"? value: location,
  //   })
  // }

  const handleEducationChange = (index, e) => {
    const {name, value} = e.target
    const updateEducations = [...educations];

    updateEducations[index][name] = value;
    setEducations(updateEducations);
    EducationOnChange(updateEducations)//this will pass it to its parent to resume
  }

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {school: "", degree: "", startDate: "", endDate: "", location: "", isEditing: true
      }
    ]);
  };

  const handleSave = (index) => {
    const updateEducations = [...educations];
    updateEducations[index].isEditing = false;
    setEducations(updateEducations);
    EducationOnChange(updateEducations)
  }
  
  const handleRemove = (index) => {
    const updateEducations = [...educations];
    updateEducations.splice(index, 1)
    setEducations(updateEducations);
    EducationOnChange(updateEducations)
  }

  const handleEdit = (index) => {
    const updateEducations = [...educations];
    updateEducations[index]["isEditing"] = true;
    setEducations(updateEducations)
    EducationOnChange(updateEducations)
  }
  const handleCancel = (index) => {
    const updateEducations = [...educations];
    updateEducations[index]["isEditing"] = false
    setEducations(updateEducations)
    EducationOnChange(updateEducations)
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
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