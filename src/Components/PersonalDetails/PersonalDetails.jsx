import { useState, useEffect } from "react"

function PersonalDetails({onChange}) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  

  function handleChange(e) {
    const {name, value} = e.target
    if (name === "FirstName") setFullName(value)
    if (name === "email") setEmail(value)
    if (name === "phone") setPhone(value)
    if (name === "address") setAddress(value) 
    
    onChange({
      fullName: name === "FirstName"? value: fullName,
      email: name === "email"? value: email,
      phone: name === "phone"? value: phone, 
      address: name === "address" ? value : address
    })
  }

  return (
    <div className="personal-detail-Wrapper">
      <h3>Personal Details</h3>

      <form className="personal-details">
    
        <label>Full name</label>
        <input 
          type="text"
          name="FirstName"
          onChange={handleChange}
          value={fullName} 
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
























// import { useState } from "react";
// import Resume from "../resume/resume";

// function App(){
  
//   return (
//     <form className="personal-detail-Wrapper">
//     <PersonalDetails label={"Email"}></PersonalDetails>
//   </form>
//  )
// }

// function PersonalDetails({label}) {
//   const [value, setValue] = useState("");
//   const [email, setEmail] = useState("");
  
//   function handleChange(e){
//     const newValue = e.target.value
//     setValue(newValue);
//     setEmail(newValue)
//   }
  
//   return (
//     <>
//     <form className="personal-detail-Wrapper">
//       <label>
//         Email
//         <input
//           className="input-group"
//           value={value}
//           onChange={handleChange}
//         />
//       </label>
//     </form>
//     <Resume email={email} /> {/* Pass the email to Resume here */}
//   </>
//   )
// }

// export default App;