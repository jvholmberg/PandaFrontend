import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const validate = () => ({

});

const ExerciseForm = ({ handleSubmit }) => (
  <div className='ExerciseForm card'>
    <form onSubmit={handleSubmit}>
      <h3>Add exercise</h3>
      <Field type='text' name='category' component={Input} label='Category' />
      <Field type='text' name='name' component={Input} label='Name' />
      <Field type='text' name='desc' component={Input} label='Description' />
      <Button type='submit' btnType='success'>
        Create
      </Button>
    </form>
  </div>
);

export default reduxForm({
  form: 'ExerciseForm',
  validate,
})(ExerciseForm);