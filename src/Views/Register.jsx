import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import '../styles/form.css'
import Footer from '../components/Footer'
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from 'react-redux'
import actions from '../actions/users'
import actionsEmail from '../actions/email'
import getUser from '../selectors/getUsers'
import getEmail from '../selectors/getEmail'

function Register({ ...props }) {
  const [userError, updateUserError] = useState(null);
  const [register, setRegister] = useState(false)
  const [repitedUser, setRepitedUser] = useState('ok')
  const [user, setUser] = useState()

  const navigate = useNavigate("/");

  useEffect(() => {
    if (user?.email?.length >= 0) {
      validateUser(user)
    }
  }, [props.getEmail])

  const validateUser = (values) => {    
    if (props.getEmail.deliverability == 'DELIVERABLE') {
      setRepitedUser('ok')
      let validate = 'ok'
      props.getUsers.map((user) => {
        if (user.email === values.email) {
          setRepitedUser("Ya existe un usuario registrado con ese email")
          validate = "Ya existe un usuario registrado con ese email"
          setRegister(false)
        }
      })
      if (validate == 'ok' && values.password == values.repeat) {
        values.logged = true
        props.createUser(values)
        setRegister(true)
        window.localStorage.setItem(
          "loggedUser", JSON.stringify(values)
        )
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
    }    
    else if (props.getEmail.deliverability != 'DELIVERABLE') {
      setRepitedUser('El email no existe')
    }
  }
  return (
    <>
      <div className="login m-5">
        <Formik
          initialValues={{ email: "", password: "", repeat: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.password) {
              errors.password = "*Completar campo*"
            }
            if (!values.repeat) {
              errors.repeat = "*Completar campo*"
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
            props.validateEmail(values?.email)
            setUser(values)
          }}
        >
          {({
            values,
            errors,
            handleBlur,
            handleChange,
            touched,
            handleSubmit,
          }) => (
            <form method="POST" className="form form--" onSubmit={handleSubmit}>
              <h1 className="form-title">Registrarse</h1>
              <div className="form-link">
                <span>¿Tienes una cuenta? <Link to="/login">Entra aqui</Link></span>
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
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Repetir contraseña
                </label>
                <input
                  type="password"
                  name="repeat"
                  onBlur={handleBlur}
                  value={values.repeat}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword2"
                />
                <div className="form-text">
                  <span className={`${touched.repeat && errors.repeat ? 'form-errors mb-2' : 'form-errors-hidden'}`}>{touched.repeat && errors.repeat}</span>
                </div>
              </div>
              <button
                className="btn btn-primary form-submit"
                type="submit"
                disabled={register ? true : false}
              >
                Aceptar
              </button>
              <div className="form-text">
                <span className="form-errors">{userError}</span>
              </div>
              {
                repitedUser != 'ok' ? <div className="form-text">
                  <span className="form-errors">{repitedUser}</span>
                </div> : <></>
              }
              <div className={`mt-2 text-success ${!register ? 'd-none' : ''}`}>Registro exitoso!</div>
            </form>
          )}
        </Formik>
      </div>
      <Footer></Footer>
    </>

  );
}

const mapStateToProps = state => {
  return {
    getUsers: getUser(state),
    getEmail: getEmail(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createUser: (user) => dispatch(actions.createUser(user)),
    validateEmail: (email) => dispatch(actionsEmail.email(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
