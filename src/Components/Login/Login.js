import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createField, Input, Textarea2 } from '../../Common/createForm.jsx';
import { maxLengthCreatorLogin, required } from '../../utils/validates.js';
import st from '../../Common/Login.module.css';
import { loginThunk } from '../../Redux/auth-reducer.js';
import { connect } from 'react-redux';
import s from './Login.module.css';

const LoginForm = ({ handleSubmit, error }) => {
  return <div className={s.item}>
    <h1>
      Login
    </h1>
    <br/>
    <form onSubmit={handleSubmit}>
      <div>
        {createField("username", "username", [required], Input, )}
      </div>
      <br/>
      <div>
        {createField("password", "password", [required], Input, {type: "password"})}
      </div>
      <br/>
      {console.log(error) && <div className={st.formaerror}>
            {error}
        </div>
        }
      <div>
        <button>enter</button>
      </div>
    </form>
  </div>
}


const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (FormData) => {
    props.loginThunk(FormData.username, FormData.password)
  }

  //  if (props.isauth) {
  //       return <Redirect to = {'/profile/'}/>
  //   }

  return <div>
    <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {loginThunk})(Login);

// export default Users;

// LoginForm