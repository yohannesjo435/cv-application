import { useState, useEffect } from "react"

function PersonalDetails({onChange, fullName, email, phone, address, handlePesonalDetails, clearIsClicked, SetClearIsClicked }) {


  const [forceRender, setForceRender] = useState(false)
  function handleChange(e) {
    let {name, value} = e.target
    if (clearIsClicked){
      e.target.value = " "
      SetClearIsClicked(false)
    }  
    onChange({
      fullName: name === "FirstName"? value: fullName,
      email: name === "email"? value: email,
      phone: name === "phone"? value: phone, 
      address: name === "address" ? value : address
    })
    console.log("clearIsClicked", clearIsClicked)
    
,
    handlePesonalDetails(name, value)
  }



  return (
    <div className="personal-detail-Wrapper">
      <h3>Personal Details</h3>

      <form className="personal-details" >
    
        <label>Full name</label>
        <input 
          type="text"
          name="FirstName"
          value={fullName} 
          onChange={handleChange}
        />

        <label>Email</label>
        <input 
          type="text"
          name="email"
          onChange={handleChange}
          value={email}
          />

        <label>Phone number</label>
        <input 
          type="text"
          name="phone"
          onChange={handleChange}
          value={phone}
         />

         <label>Address</label>
         <input 
          type="text" 
          name="address"
          onChange={handleChange}
          value={address}
          />
      </form>
    </div>
  )

}

export default PersonalDetails;
