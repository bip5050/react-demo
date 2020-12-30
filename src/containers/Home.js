import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/home';
import { do_login } from '../redux/actions/auth';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    data: state.signup
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    do_login:do_login,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);