import React from 'react'
import axios from 'axios'
export function UserForm() {

 const labelFontSize={ fontSize: '20px' }

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
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label
                style={{ fontSize: '20px' }}
                htmlFor="exampleInputPassword1"
              >
                Prénom
              </label>
              <input
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
                style={{ fontSize: '20px' }}
                htmlFor="exampleInputPassword1"
              >
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label
                style={{ fontSize: '20px' }}
                htmlFor="exampleInputPassword1"
              >
                E-Mail Adresse
              </label>
              <input
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
                style={{ fontSize: '20px' }}
                htmlFor="exampleInputPassword1"
              >
                Code postale
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label
                style={{ fontSize: '20px' }}
                htmlFor="exampleInputPassword1"
              >
                Pays & Adresse
              </label>
              <input
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
                style={{ fontSize: '20px' }}
                htmlFor="exampleInputPassword1"
              >
                Interessé par
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label
                style={{ fontSize: '20px' }}
                htmlFor="exampleInputPassword1"
              >
                Numéro de téléphone
              </label>
              <input
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
