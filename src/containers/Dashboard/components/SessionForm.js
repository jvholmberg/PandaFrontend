import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const validate = () => ({

});

const renderExercises = ({ fields, meta: { error } }) => (
  <div>
    <Button type='button' btnType='primary' onClick={() => fields.push({})}>
      Add Exercise
    </Button>
    {fields && fields.map((field, idx) => (
      <div key={idx}>
        <Field type='text' name={`${field}.name`} component={Input} label='Category' />
        <FieldArray name={`${field}.sets`} component={renderExerciseSet} />
      </div>
    ))}
  </div>
);

const renderExerciseSet = ({ fields, meta: { error } }) => (
  <div className='row'>
    <div className='col-sm-12 col-md-12 col-lg-12'>
      <Button type='button' btnType='primary' onClick={() => fields.push({})}>
        Add Set
      </Button>
    </div>
      {fields && fields.map((field, idx) => (
        <div key={idx}>
          <h3>{idx}</h3>
          <div className='col-sm-4 col-md-2 col-lg-2'>
            <Field type='text' name='weight' component={Input} placeholder='Weight' />
          </div>
          <div className='col-sm-4 col-md-2 col-lg-2'>
            <Field type='text' name='reps' component={Input} placeholder='Repetitions' />
          </div>
          <div className='col-sm-4 col-md-2 col-lg-2'>
            <Field type='text' name='drops' component={Input} placeholder='Drops' />
          </div>
        </div>
      ))}
  </div>
);

const SessionForm = ({ handleSubmit }) => (
  <div className='SessionForm card'>
    <form onSubmit={handleSubmit}>
      <h3>Add session</h3>
      <Field type='text' name='category' component={Input} label='Category' />
      <Field type='text' name='name' component={Input} label='Name' />
      <Field type='text' name='description' component={Input} label='Description' />
      <FieldArray name='exercises' component={renderExercises} />
      <Button type='submit' btnType='success'>
        Create
      </Button>
    </form>
  </div>
);

export default reduxForm({
  form: 'SessionForm',
  initialValues: {
    category: '',
    name: '',
    description: '',
    exercises: [],
  },
  validate,
})(SessionForm);