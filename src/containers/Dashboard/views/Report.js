import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const Report = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
}) => (
  <form onSubmit={handleSubmit}>
    <button type="submit" disabled={pristine || submitting}>
      Submit
    </button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>
      Clear Values
    </button>
  </form>
);
export default reduxForm({
  form: 'ReportForm',
})(Report)
