import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { showFixedNavigation, hideFixedNavigation } from '../App/reducer';

import {
  goToError,
  goToPrevError,
  goToNextError,
  clearErrors,
} from './reducer';

export const mapStateToProps = (state, props) => {
  const { fixed } = _.get(state, 'app', {});;
  const all = _.get(state, `errors.all`);
  const current = _.get(state, 'errors.current');
  const total = all.length;
  const error = all[current];
  return { fixed, current, total, error };
};

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  hideFixedNavigation,
  showFixedNavigation,
  goToError,
  goToPrevError,
  goToNextError,
  clearErrors,
}, dispatch);
