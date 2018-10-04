import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { hideFixedNavigation, showFixedNavigation, toggleSidebar, closeSidebar } from '../App/reducer';

export const mapStateToProps = (state, props) => {
  const { fixed, open } = _.get(state, 'app', {});;
  return { fixed, open };
};

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  hideFixedNavigation,
  showFixedNavigation,
  toggleSidebar,
  closeSidebar,
}, dispatch);