import React from 'react'
import { useFormik } from 'formik';
import validations from './validations';

function SignUp() {
    const {handleSubmit,handleChange,touched,errors,handleBlur,values} = useFormik({
        initialValues: {
          email:'',
          password:'',
          passwordConfirm:'',
        },
        onSubmit: values => {
         console.log(values);
        },
        validationSchema:validations
      });
  return (
    <div>
<form onSubmit={handleSubmit}>
   
        <span><label>Email</label></span>
        <div>
       <input
         name="email"
         type="email"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.email}
       />
       {errors.email && touched.email&& <div className='alert'>{errors.email}</div> }
       </div>
       <br />
      
       
        <span><label>Password</label></span>
        <div>
       <input
       
         name="password"
         type="password"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.password}
       />
        {errors.password && touched.password&& <div className='alert'>{errors.password}</div>}
       </div>
       <br />
      
        <span><label>Password Confirm</label></span>
        <div>
       <input
         name="passwordConfirm"
         type="password"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.passwordConfirm}
       />
       {errors.passwordConfirm && touched.passwordConfirm&& <div className='alert'>{errors.passwordConfirm}</div>}
       </div>
       <button type="submit">Submit</button>
     </form>


        
    </div>
  )
}

export default SignUp