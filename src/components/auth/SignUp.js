import React from "react";

const SignUp = () => {
  return (
    <div className='auth-container'>
      <form>
        <h2>Register User</h2>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='Enter Name' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter Email'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter Password'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            id='password2'
            name='password2'
            placeholder='Enter Password Again'
          />
        </div>
        <input type='submit' value='SignUp' />
        <p>Already has an account? Goto Login</p>
      </form>
    </div>
  );
};

export default SignUp;
