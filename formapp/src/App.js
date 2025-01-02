import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // function firstnameHandler(e) {
  //   setFirstName(e.target.value)
  // }
  //  function lastnameHandler(e) {
  //    setLastName(e.target.value);
  //  }
  
  // from handling

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email:"", isVisible:true})
  function changeHandler(e) {
    setFormData(prevFormData => {
      const {name, value, checked, type} = e.target
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked:value
      }
    })
  }
  function submitHandler(e) {
    e.preventDefault()
    console.log("Data submited sucessfully....")
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name='isVisible'
          checked={formData.isVisible}
          id="isVisible"
        />
        <label htmlFor="isVisible">Check me</label>

        {/* Submiting the form */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
