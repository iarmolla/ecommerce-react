import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import '../styles/form.css'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";

function Login({ ...props }) {
  const [userError, updateUserError] = useState('');
  useEffect(() => {
    props.loadUsers()
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
            let users = [0, 1]
            users = Object.values(props.getUsers)
            users.map((element) => {
              if (values.email == element.email && values.password == element.password) {
                values.id = element.id
                values.logged = true
                props.loginUser(values)
                navigate('/')
                window.localStorage.setItem(
                  "loggedUser",JSON.stringify(values)
                )
              }
            })
            updateUserError('El email o la contraseña es incorrecta')
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
          }) => (
            <form method="POST" className="form" onSubmit={handleSubmit}>
              <h1 className="form-title">Iniciar sesion</h1>
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
                  <span className="form-errors">{errors.email}</span>
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
                  <span className="form-errors">{errors.password}</span>
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

export default Login;
