import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import '../styles/form.css'
import Footer from '../components/Footer'
import { Link, useNavigate } from "react-router-dom";

function Register({ ...props }) {
  const [userError, updateUserError] = useState('');
  useEffect(() => {

  }, [])
  const navigate = useNavigate("/");
  return (
    <>
      <div className="login m-5">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.password) {
              errors.password = "*Completar campo*"
            }
            if (!values.email) {
              errors.email = "*Completar campo*";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "*No corresponde a una direccion de email*";
            }
            return errors;
          }}
          onSubmit={(values) => {
           
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
          }) => (
            <form method="POST" className="form" onSubmit={handleSubmit}>
              <h1 className="form-title">Registrarse</h1>
              <div className="form-link">
                <span>¿Tienes una cuenta? <Link to="/register">Entra aqui</Link></span>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  className="form-control form-control--"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  autoComplete="off"
                />
                <div id="emailHelp" className="form-text">
                  <span className={`${errors.email ? 'form-errors' : 'form-errors-hidden'}`}>{errors.email}</span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <div className="form-text">
                  <span className={`${errors.password ? 'form-errors' : 'form-errors-hidden'}`}>{errors.password}</span>
                </div>
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Repetir contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <div className="form-text">
                  <span className={`${errors.password ? 'form-errors' : 'form-errors-hidden'}`}>{errors.password}</span>
                </div>
              </div>
              <button
                className="btn btn-primary form-submit"
                type="submit"
              >
                Aceptar
              </button>
              <div className="form-text">
                <span className="form-errors">{userError}</span>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <Footer></Footer>
    </>

  );
}

export default Register;
