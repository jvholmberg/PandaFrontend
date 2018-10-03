import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { hideFixedNavigation, showFixedNavigation } from '../App/reducer';

export const mapStateToProps = (state, props) => {
  const { fixed } = _.get(state, 'app', {});;
  return { fixed };
};

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  hideFixedNavigation,
  showFixedNavigation
}, dispatch);