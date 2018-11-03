import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const validate = () => ({

});

const NutrientsForm = ({ handleSubmit }) => (
  <div className='NutrientsForm card'>
    <form onSubmit={handleSubmit}>
      <h3>Add Nutrient</h3>
      <Field type='text' name='name' component={Input} label='Name' />
      <Field type='text' name='desc' component={Input} label='Description' />
      <Field type='text' name='protein' component={Input} label='Protein' />
      <Field type='text' name='carbs' component={Input} label='Carbohydrates' />
      <Button type='submit' btnType='success'>
        Create
      </Button>
    </form>
  </div>
);

export default reduxForm({
  form: 'NutrientsForm',
  validate,
})(NutrientsForm);