import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import './Login.css';

import { mapStateToProps, mapDispatchToProps } from './selector';

// const validationSchema = (values) => Yup.object().shape({
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required!'),
//   password: Yup.string()
//     .min(8, 'Password must be atleast 8 characters')
//     .required('Password is required'),
// });
//
// const handleSubmit  = (values, actions) => {
//   console.log('handleSubmit');
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     actions.setSubmitting(false);
//   }, 1000);
// };
//
// const renderErrors = (errors, touched) => {
//   // Single error
//   if (touched && typeof errors === 'string') {
//     return <div className='LoginForm-Error'>* {errors}</div>;
//   }
//   // Multiple errors
//   if (touched && errors) {
//     return errors.map((err) => <div className='LoginForm-Error'>* {err}</div>);
//   }
//   // No errors
//   return <div></div>;
// };

class Login extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {

    return (
      <div>
        {/* <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          render={(formProps) => (
            <Form>
              <Field
                name="email"
                render={({ field, form: { touched, errors } }) => (
                  <input required touched={touched} errors={errors} {...field} />
                )} />
                <Field
                  name="password"
                  render={({ field, form: { touched, errors } }) => (
                    <input required touched={touched} errors={errors} {...field} />
                  )} />
              <button type='submit' disabled={formProps.isSubmitting}>
                Log in
              </button>
              <button onClick={formProps.handleReset}>
                Reset
              </button>
              {renderErrors(formProps.errors.email, formProps.touched.email)}
              {renderErrors(formProps.errors.password, formProps.touched.password)}
            </Form>
          )}
        /> */}
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
