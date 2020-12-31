"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _home = _interopRequireDefault(require("../components/home"));

var _auth = require("../redux/actions/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    data: state.signup
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return (0, _redux.bindActionCreators)({
    do_login: _auth.do_login
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_home.default);

exports.default = _default;