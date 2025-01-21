function Resume({personalDetails, educationalDetails, experienceDetails}){
 return (
  <div className="resume-wrapper">
    <div className="personal-info">
      <h1>{personalDetails.fullName}</h1>
      <div className="contact-info">
        <p>
          {personalDetails.email?<img className="logo-mail" src="src\assets\mail.png" style={{marginRight: "10px", marginBottom:" -3px"}}/>:null}
          {personalDetails.email}
        </p>
        <p className="resume-phone-wrapper">
          {personalDetails.phone && <img className="logo-phone" src="src\assets\whitephone.png"/>}
          {personalDetails.phone}
        </p>
        
        <p className="resume-location-wrapper">
          {personalDetails.address && <img className="logo-phone" src="src\assets\whiteLocation.png"/>}
          {personalDetails.address}</p>
      </div>
    </div>

    <div className="educational-info-wrapper">
      <h3>Education</h3>
        {educationalDetails.map( (edu, index) => {
          return (
            <div key={index} className="education-info">
              <div className="education-info-group child1">
                <p>{edu.startDate} {edu.endDate != "" ? ` - ${edu.endDate}`:"-present"}</p>
                <p>{edu.location}</p>
              </div>
    
              <div className="education-info-group child2">
                <p className="resume-school" >{edu.school}</p>
                <p className="resume-degree">{edu.degree}</p>
              </div>
            </div>   
          )
        } )}
      <h3>Professional Experience</h3>
      {experienceDetails.map((exp, index)=> (
        <div className="resume-experience-wrapper" key={index}>
          <div className="experience-info-group child1">
            <p className="resume-year">
              {exp.startDate} {exp.endDate != "" ? ` - ${exp.endDate}`:"-present"}</p>
            <p className="resume-address">{exp.address}</p>
          </div>

          <div className="experience-info-group child2">
            <p className="resume-company-name">{exp.companyName}</p>
            <p className="resume-title">{exp.positionTitle}</p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
  )

}

export default Resume;