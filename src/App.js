/*import React, { useState } from 'react'
import './App.css'
  import {
    TextBox,
    Checkbox,
    DateTime,
    Telephone,
    DropDown,
    Option,
    RadioGroup,
    Form,
    EmailInput,
    Password
  } from 'react-form-elements'


const App = () =>{

  const [values, setValues] = useState({})

  return (
    <div>
      <h1>Formularz</h1>
      <Form
        name="testForm"
        onSubmit={data => {
          // data[form element name]
          setValues(data)
          // do something with values
        }}
      >
       
        <div className="Form__left"> 
        
        <h2>Authentication data</h2>
        <hr></hr>
        <EmailInput
          name="emailbox"
          label="Adres e-mail"
        />
        <Password
          name="password"
          label="Password"
        />
        <Password
          name="password-two"
          label="Password again"
        />
        <h2>Contact data</h2>
        <hr></hr>
        <TextBox label="City" name="city" />
        <TextBox label="Country" name="country" />
        <TextBox label="Nationality" name="nationality" />
        <Telephone label="Telephone" name="telephone" />
        </div>
        <div className="Form__right"> 
        <h2>Basic data</h2>
        <TextBox label="First name" name="firstname" />
        <TextBox label="Last name" name="lastname" />
        <RadioGroup
          label="Gender"
          name="gender"
          options={[
            {value: 'male', label: 'male'},
            {value: 'female', label: 'female'},
          ]}
        />
        <DateTime label="Date of birth" name="datebirth" />

        <DropDown
          label="Short size"
          initialValue="M"
          data-testid="dd1"
          name="dropdown"
        >
            <Option initialValue="XL">XS</Option>
            <Option initialValue="S">S</Option>
            <Option initialValue="M">M</Option>
            <Option initialValue="L">L</Option>
            <Option initialValue="XL" label="XL" />
        </DropDown>
        <DateTime label="My average time for 1km" type="time" name="myTime" />
        <Checkbox
          label="Do you agree with regulations?"
       
          initialValue="True"
          checked={false}
          required
          name="checkbox"
        />

        <button onClick={e => {}}>Save</button></div>
      </Form>
      
      
      <div className="Summary" data-testid="ref-out"> 
        <h2>Summary</h2>
        <ul>
          <li>E-mail: {values.emailbox}</li>
          <li>City: {values.city}</li>
          <li>Country: {values.country}</li>
          <li>Nationality: {values.nationality}</li>
          <li>Telephone: {values.telephone}</li>
          <li>First Name: {values.firstname}</li>
          <li>Last name: {values.lastname}</li>
          <li>Gender: {values.gender}</li>
          <li>Date of birth: {values.datebirth}</li>
          <li>Short size: {values.dropdown}</li>
          <li>My average time for 1km: {values.myTime}</li>
        </ul>
      </div>
    </div>
  )
}
export default App;*/


import React, { useState } from 'react'
import './App.css'
import {
  TextBox,
    Checkbox,
    DateTime,
    Telephone,
    DropDown,
    Option,
    RadioGroup,
    Form,
    EmailInput,
    Password,
} from 'react-form-elements'

const App = () => {
  const [values, setValues] = useState({})

  return (
    <div className="Form">
      <h1>React Form Elements</h1>
      <Form
        name="testForm"
        onSubmit={data => {
          // data[form element name]
          setValues(data)
          // do something with values
        }}
      >
       
      
        
        <h2>Authentication data</h2>
        <hr></hr>
        <EmailInput
          name="emailbox"
          label="Adres e-mail"
        />
        <Password
          name="password"
          label="Password"
        />
        <Password
          name="password-two"
          label="Password again"
        />
        <h2>Contact data</h2>
        <hr></hr>
        <TextBox label="City" name="city" />
        <TextBox label="Country" name="country" />
        <TextBox label="Nationality" name="nationality" />
        <Telephone label="Telephone" name="telephone" />
       
        
        <h2>Basic data</h2>
        <hr></hr>
        <TextBox label="First name" name="firstname" />
        <TextBox label="Last name" name="lastname" />
        <RadioGroup
          label="Gender"
          name="gender"
          options={[
            {value: 'male', label: 'male'},
            {value: 'female', label: 'female'},
          ]}
        />
        <DateTime label="Date of birth" name="datebirth" />
        
        <DropDown
          label="Short size"
          initialValue="M"
          data-testid="dd1"
          name="dropdown"
        >
            <Option initialValue="XL">XS</Option>
            <Option initialValue="S">S</Option>
            <Option initialValue="M">M</Option>
            <Option initialValue="L">L</Option>
            <Option initialValue="XL" label="XL" />
        </DropDown>
        <DateTime label="My average time for 1km" type="time" name="myTime" />
        <Checkbox
          label="Do you agree with regulations?"
       
          initialValue="True"
          checked={false}
          required
          name="checkbox"
        />
        <div className="btn-primary">
        <button onClick={e => {}}>Save</button></div>
      </Form>
      <div className="Summary" data-testid="ref-out"> 
        <h2>Summary</h2>
        <ul>
          <li>E-mail: {values.emailbox}</li>
          <li>City: {values.city}</li>
          <li>Country: {values.country}</li>
          <li>Nationality: {values.nationality}</li>
          <li>Telephone: {values.telephone}</li>
          <li>First Name: {values.firstname}</li>
          <li>Last name: {values.lastname}</li>
          <li>Gender: {values.gender}</li>
          <li>Date of birth: {values.datebirth}</li>
          <li>Short size: {values.dropdown}</li>
          <li>My average time for 1km: {values.myTime}</li>
        </ul>
      </div>
      </div>
      
  )
}

export default App