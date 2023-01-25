import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import '../styles/form.css'
import Footer from '../components/Footer'
import { Link, useNavigate } from "react-router-dom";

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
                if (!props.footer) {} else {
                  navigate('/')
                }
                window.localStorage.setItem(
                  "loggedUser", JSON.stringify(values)
                )
              }
            })
            updateUserError('El email o la contraseña es incorrecta')
          }}
        >
          {({
            values,
            errors,
            handleBlur,
            touched,
            handleChange,
            handleSubmit,
          }) => (
            <form method="POST" className={`${props.footer == false ? 'form border-0' : 'form'}`} onSubmit={handleSubmit}>
              <h1 className="form-title">Iniciar sesion</h1>
              <div className="form-link">
                <span>¿No tienes una cuenta? <Link to="/register">Entra aqui</Link></span>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="form-control form-control--"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  autoComplete="off"
                />
                <div id="emailHelp" className="form-text">
                  <span className={`${touched.email && errors.email ? 'form-errors' : 'form-errors-hidden'}`}>{touched.email && errors.email}</span>
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <div className="form-text">
                  <span className={`${touched.password && errors.password ? 'form-errors' : 'form-errors-hidden'}`}>{touched.password && errors.password}</span>
                </div>
              </div>
              <button
                className="btn btn-primary form-submit mt-2"
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
      {props.footer == false ? <></> : <Footer></Footer>}
    </>

  );
}

export default Login;
