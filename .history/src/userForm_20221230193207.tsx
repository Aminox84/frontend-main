import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { convertTypeAcquisitionFromJson } from 'typescript'

const UserForm = () => {
  // const [data, setData] = useState([] as any[]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((res) => {
        console.log(res.data)
        // setData(res.data)
      })
      .catch((err) => console.log(err));

  }, [])

  const [addFormData, setAddFormData] = useState({
    "username": '',
    "profile": {
      "firstname": '',
      "lastname": '',
      "age": 0,
      "dob": '',
      "interest": '',
      "phoneNumber": '',
      "email": '',
      "zipCode": '',
      "state": '',
    },
  })

  const handleFormChange = (event) => {
    
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData={ ...addFormData}

    if ( fieldName === "firstname") newFormData.profile.firstname = fieldValue
    if ( fieldName === "lastname") newFormData.profile.lastname = fieldValue
    if ( fieldName === "age") newFormData.profile.age = fieldValue
    if ( fieldName === "dob") newFormData.profile.dob = fieldValue
    if ( fieldName === "interest") newFormData.profile.interest = fieldValue
    if ( fieldName === "phoneNumber") newFormData.profile.phoneNumber = fieldValue
    if ( fieldName === "zipCode") newFormData.profile.zipCode = fieldValue
    if ( fieldName === "state") newFormData.profile.state = fieldValue
    if ( fieldName === "username") newFormData.username = fieldValue

    
    

    setAddFormData(newFormData)

    console.log(addFormData)
  }

  const [data,setData]=useState([])

  const handleSubmitButton = (event) => {
    event.preventDefault()

     const p = axios.get(`http://localhost:3000/users`).then((res)=>{ setData(res.data)});
     const id = Object.keys(p).length
     
    axios.all([
      axios.post(`http://localhost:3000/users`, {
        "username": addFormData.username,
      }), 
      axios.post(`http://localhost:3000/users/${id}/profiles`, {
      "firstname": addFormData.profile.firstname,
      "lastname": addFormData.profile.lastname,
      "age": addFormData.profile.age,
      "dob": addFormData.profile.dob,
      "interest": addFormData.profile.interest,
      "phoneNumber": addFormData.profile.phoneNumber,
      "email": addFormData.profile.email,
      "zipCode": addFormData.profile.zipCode,
      "state": addFormData.profile.state,
      })
    ])
  }

  const labelFontSize = { fontSize: '20px' }

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>
        Bienvenue! Vous pouvez maintenant entrer vos informations!
      </h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                Nom de la sociéte
              </label>
              <input
                onChange={handleFormChange}
                name="username"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                Prénom
              </label>
              <input
                onChange={handleFormChange}
                name="firstname"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                Nom
              </label>
              <input
                onChange={handleFormChange}
                name="lastname"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                Age
              </label>
              <input
                onChange={handleFormChange}
                name="age"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                Date de naissance
              </label>
              <input
                onChange={handleFormChange}
                name="dob"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                Numéro de telephone
              </label>
              <input
                onChange={handleFormChange}
                name="phoneNumber"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                E-Mail
              </label>

              <input
                 name="email"
                onChange={handleFormChange}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                Interessé(e) par
              </label>
              <input
                onChange={handleFormChange}
                name="interest"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                Code Postale
              </label>

              <input
                name="zipCode"
                onChange={handleFormChange}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label style={labelFontSize} htmlFor="exampleInputPassword1">
                Ville
              </label>
              <input
                onChange={handleFormChange}
                name="state"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            onClick={handleSubmitButton}
            type="button"
            className="btn btn-primary ml-2"
          >
            Soumettre
          </button>
        </div>
      </div>
    </>
  )
}
export default UserForm
