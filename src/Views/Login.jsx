import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import '../styles/form.css'
import Footer from '../components/Footer'

function Login() {
  const [user, updateUser] = useState();
  const [navigate, updateNavigate] = useState(false)
  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => updateUser(json));
  }, [])
  return (
    <>
      <div className="login m-5">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Falta el campo email";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "No corresponde a una direccion de email";
            }
            return errors;
          }}
          onSubmit={(values) => {
            user.map((element) => {
              if (values.email == element.email && values.password == element.password) {
                updateNavigate(true)
              }
            })
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form method="POST" className="form" onSubmit={handleSubmit}>
              <h1 className="form-title">Iniciar sesion</h1>
              <div className="form-link">
                <span>¿No tienes una cuenta? <Link>Entra aqui</Link></span>
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
                <div id="emailHelp" className="form-text">
                  {errors.password}
                </div>
              </div>

              <div className="mb-3 form-checkout">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Recuerdame
                </label>
              </div>

              <button
                className="btn btn-primary form-submit"
                type="submit"
                disabled={isSubmitting}
              >
                Aceptar
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Footer></Footer>
    </>

  );
}

export default Login;
