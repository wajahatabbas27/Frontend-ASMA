import React from "react";

const Login = () => {
  return (
    <div className='auth-container'>
      <form>
        <h2>Login User</h2>
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
        <input type='submit' value='Login' />
        <p>Haven't Register yet? Register yourself</p>
      </form>
    </div>
  );
};

export default Login;
