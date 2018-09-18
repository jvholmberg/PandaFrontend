import { bindActionCreators } from 'redux';
import _ from 'lodash';

export const mapStateToProps = (state, props) => {
  const app = _.get(state, 'app', {});;
  return { app };
};

export const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);
