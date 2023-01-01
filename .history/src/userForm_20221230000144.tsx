import React,{useState} from 'react'
import axios from 'axios'
import { convertTypeAcquisitionFromJson } from 'typescript'

const UserForm= ()=> {
 
  const axios=require('axios');

 const res = async ()=>await axios.get(`localhost:3000/users`).then (console.log;
 console.log(res)


    const [data,setData]= useState([{
        firstName: 'firstTest',
        lastName:'lastTest',
        age: '22',
        email:'justtestingjunkie@gmail.com',
        codePostale:'8050',
        interest:'Prostitution',
        paysEtAdresse:'Nigeria',
        phoneNumber:'+4915115897636'
    }])

    const [addFormData,setAddFormData]= useState({
        firstName: '',
        lastName:'',
        age: '',
        email:'',
        codePostale:'',
        interest:'',
        paysEtAdresse:'',
        phoneNumber:''
    })

    const handleFormChange=(event)=>{
        event.preventDefault();

        const fieldName=event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData={...addFormData};
        newFormData[fieldName]=fieldValue;

        setAddFormData(newFormData);

    }

    const handleSubmitButton=(event)=>{
        event.preventDefault();

        const newContact={
            firstName:addFormData.firstName,
            lastName:addFormData.lastName,
            age:addFormData.age,
            email:addFormData.email,
            codePostale:addFormData.codePostale,
            interest:addFormData.interest,
            paysEtAdresse:addFormData.paysEtAdresse,
            phoneNumber:addFormData.phoneNumber
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
        <div className='d-flex justify-content-center mt-3'>
       <button onClick={handleSubmitButton} type="button" className='btn btn-primary ml-2'>Soumettre</button>
       </div>
      
    
      </div>
    </>
  )
}
export default UserForm;
