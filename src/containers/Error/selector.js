import { bindActionCreators } from 'redux';
import _ from 'lodash';

import {
  goToError,
  goToPrevError,
  goToNextError,
  clearErrors,
} from './reducer';

export const mapStateToProps = (state, props) => {
  const all = _.get(state, `errors.all`);
  const current = _.get(state, 'errors.current');
  const total = all.length;
  const error = all[current];
  return { current, total, error };
};

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  goToError,
  goToPrevError,
  goToNextError,
  clearErrors,
}, dispatch);
