import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Login.scss"

const Login = () => {
  const { isOpen, setIsOpen, setRopen } = useContext(MyContext);

  // Initial form values
  const initialValues = {
    mobileNo: ""
  };

  const validationSchema = Yup.object({
    mobileNo: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Mobile number must be valid")
      .required('Mobile number is required')
  });

  const onSubmit = () => {
    // let forbtn = false
  }

  return (
    <Drawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      direction="right"
      className="bla bla bla"
      overlayOpacity={0.1}
      size={400}
    >
      <div>
        <button onClick={() => setIsOpen(false) || setRopen(true)}>Register</button>
      </div>
      <div className='login-img'>

      </div>
      <div className='form-container'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="contact-form">
            <div className="form-field">
              <label htmlFor="mobileNo">MobileNo</label>
              <Field type="text" id="mobileNo" name="mobileNo" placeholder="Enter Mobile Number" />
              <ErrorMessage name="mobileNo" component="div" className="error" />
            </div>
            <button type="submit" className="submit-button">
              Send OTP
            </button>
          </Form>
        </Formik>
      </div>
    </Drawer>
  );
};

export default Login;
