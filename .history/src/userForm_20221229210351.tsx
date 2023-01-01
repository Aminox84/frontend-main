import React,{useState} from 'react'
import axios from 'axios'
import { convertTypeAcquisitionFromJson } from 'typescript'

const UserForm= ()=> {

    const [data,setData]= useState([{
        firstName: '',
        lastName:'',
        age: '',
        email:'',
        codePostale:'',
        interest:'',
        paysEtAdresse:'',
        phoneNumber:''
    }])

    const handleFormChange=(event)=>{
        event.preventDefault();

        const fieldName=event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData={...data};
        newFormData[fieldName]=fieldValue;

        setData(newFormData);

    }

    const handleSubmitButton=(event)=>{
        event.preventDefault();

        const newContact={
            firstName:data[0].firstName,
            lastName:data[0].lastName,
            age:data[0].age,
            codePostale:data[0].codePostale,
            interest:data[0].interest,
            paysEtAdresse:data[0].paysEtAdresse,
            phoneNumber:data[0].phoneNumber
        }

        const newContacts=[...data,newContact]
        setData(newContacts);
    }

 const labelFontSize={fontSize:"20px"}

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>
        Bienvenue! Vous pouvez maintenant entrer vos informations!
      </h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label
                style={labelFontSize}
                htmlFor="exampleInputPassword1"
              >
                Nom
              </label>
              <input
              onChange={handleFormChange}
                name="lastName"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label
                style={labelFontSize}
                htmlFor="exampleInputPassword1"
              >
                Prénom
              </label>
              <input
              onChange={handleFormChange}
                name='firstName'
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
              <label
                style={labelFontSize}
                htmlFor="exampleInputPassword1"
              >
                Age
              </label>
              <input
              onChange={handleFormChange}
              name='age'
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label
                style={labelFontSize}
                htmlFor="exampleInputPassword1"
              >
                E-Mail Adresse
              </label>
              <input
              onChange={handleFormChange}
              name='email'
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
              <label
                style={labelFontSize}
                htmlFor="exampleInputPassword1"
              >
                Code postale
              </label>
              <input
              onChange={handleFormChange}
              name='codePostale'
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label
                style={labelFontSize}
                htmlFor="exampleInputPassword1"
              >
                Pays & Adresse
              </label>
              <input
              onChange={handleFormChange}
              name='paysEtAdresse'
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
              <label
                style={labelFontSize}
                htmlFor="exampleInputPassword1"
              >
                Interessé par
              </label>
              <input
              onChange={handleFormChange}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label
                style={labelFontSize}
                htmlFor="exampleInputPassword1"
              >
                Numéro de téléphone
              </label>
              <input
              onChange={handleFormChange}
              name='phoneNumber'
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserForm;
