import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createField, Input, Textarea2 } from '../../Common/createForm.jsx';
import { maxLengthCreatorLogin, required } from '../../utils/validates.js';
import st from '../../Common/Login.module.css';
import { loginThunk } from '../../Redux/auth-reducer.js';


const LoginForm = ({ handleSubmit, error }) => {
  return <div>
    <h1>
      Login
    </h1>
    <form onSubmit={handleSubmit}>
      <div>
        {createField("email", "email", [required], Input)}
      </div>
      <div>
        {createField(createField("password", "password", [required], Input, {type: "password"}))}
      </div>
      <div>
        {createField(null, "checkbox", [], Input, {type: 'checkbox'})}
      </div>
      <div>
        { error && <div className={st.formaerror}>
            {error}
        </div>
        }
      </div>
      <div>
        <button>enter</button>
      </div>
    </form>
  </div>
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Users = (props) => {
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

export default Users;