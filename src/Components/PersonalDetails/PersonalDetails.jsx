import { useState } from "react"

function PersonalDetails({fullName, email, phone, address, handleChange}) {

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
