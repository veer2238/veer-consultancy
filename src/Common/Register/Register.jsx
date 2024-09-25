import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Register = () => {

    const{ropen,setRopen} =useContext(MyContext)
  return (
    <Drawer
    open={ropen}
    onClose={() => setRopen(false)}
    direction="right"
    className="bla bla bla"
    overlayOpacity={0.1}
    size={400}
  >
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{ mobileNumber: '' }}
        validationSchema={ Yup.object({
          mobileNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
            .required('Mobile number is required'),
        })}
        onSubmit={async(values,{resetForm}) => {
        
       const {data}= await axios.post('http://localhost:3034/otpverify',values)

       if(data.success){
        alert(data.message)
        resetForm()
       }
       else{
        alert('try again')
       }
        }}
      >
        {() => (
          <Form>
           
            <div>
              <label htmlFor="mobileNumber">Mobile Number</label>
              <Field
                name="mobileNumber"
                type="text"
                placeholder="Enter mobile number"
              />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                style={{ color: 'red' }}
              />
            </div>

          
            <button type="submit">Send OTP</button>
          </Form>
        )}
      </Formik>
    </div>
  </Drawer>
  )
}

export default Register