import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Dashboard.css';

import { mapStateToProps, mapDispatchToProps } from './selector';
import Page from '../../components/Page';
import NutrientsForm from './components/NutrientsForm';
import ExerciseForm from './components/ExerciseForm';
import ExerciseChart from './components/ExerciseChart';
import SessionForm from './components/SessionForm';
import SessionTable from './components/SessionTable';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    const testData = [
      { date: '2018-01-01', name: 'Chest day' },
      { date: '2018-01-02', name: 'Shoulders' },
    ];

    return (
      <Page icon='fas fa-cookie-bite' title='Dashboard'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <ExerciseChart />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <SessionForm onSubmit={(values) => console.log(values)} />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <NutrientsForm onSubmit={(values) => console.log(values)} />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <ExerciseForm onSubmit={(values) => console.log(values)} />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <SessionTable data={testData} />
          </div>
        </div>
      </Page>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
