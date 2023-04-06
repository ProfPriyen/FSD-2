import React, { useState } from 'react'


const Form = () => {
    const[firstname,setFirstName] = useState("");
    const[lastname,setLastName] = useState("");
    const[adress,setAdress] = useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    
    const handleFirstNameChange= (e) =>{
        setFirstName(e.target.value)
    };
    const handleLastNameChange= (e) =>{
        setLastName(e.target.value)
    };
    const handleAdressChange= (e) =>{
        setAdress(e.target.value)
    };
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    };
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    };
    const handleSubmit= (e) =>{
        e.preventDefault(); 
        //validate email using regex
        const emailRegex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if(!emailRegex.test(email)){
            alert("Please entera valid email");
        }
        else if(!passwordRegex.test(password)){
            alert("Password must be........");
        }
        else{
            console.log("Form Submitted");
            localStorage.setItem("userName",firstname);
            localStorage.setItem("userName2",password);
            window.location.pathname="/welcome";
        }
      };
      //Valid password using regex
      //Submit the form if validation passes

  return (
    <form onSubmit={handleSubmit}>
        <label>
            FirstName:
            <input type="text" value={firstname} onChange={handleFirstNameChange}></input>
        </label>
        <br/>
      
        <label>
            LastName:
            <input type="text" value={lastname} onChange={handleLastNameChange}></input>
        </label>
        <br/>
        <label>
            Adress:
            <input type="text" value={adress} onChange={handleAdressChange}></input>
        </label>
        <br/>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange}></input>
      </label>
      <br/>
      <label>
        Password:
        <input
        type="password"
        value={password}
        onChange={handlePasswordChange} />
      </label>
      <br/>
      <button type="submit"> Submit</button>
    </form>
  )
}

export default Form