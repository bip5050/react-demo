"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.object.set-prototype-of.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _helperfunc = require("../../util/helperfunc");

var _lodash = _interopRequireDefault(require("lodash"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var home = /*#__PURE__*/function (_Component) {
  _inherits(home, _Component);

  var _super = _createSuper(home);

  function home(props) {
    var _this;

    _classCallCheck(this, home);

    _this = _super.call(this, props);
    _this.defaultErrors = {
      email: false,
      password: false
    };
    _this.state = {
      faqData: [],
      isLoading: true,
      modal: false,
      typePass: 'password',
      formData: {
        product_description: "",
        funding_history: "",
        company_info: "",
        fetaures: "",
        customer_case_study: "",
        overall_scoor: "Score",
        box_header: "Box"
      },
      columData: [{
        box_header: {
          text: "Box",
          data: [{
            description: "data"
          }]
        },
        overall_scoor: {
          text: "Overall Score",
          data: [{
            description: "Score"
          }]
        },
        product_description: {
          text: "Product Description",
          data: [{
            description: "Box is a modern content of management"
          }]
        },
        funding_history: {
          text: "Funding History",
          data: [{
            description: "Total Funding: $150m"
          }],
          subitems: {
            Founded: ["2005"],
            KeyInvestors: ["DFG, scale, venture partners"],
            Founders: ["Arone Levie, Dylon smith"]
          }
        },
        company_info: {
          text: "Company Info",
          data: [{
            description: "Johnson"
          }]
        },
        fetaures: {
          text: "Fetaures",
          data: [{
            description: "Good"
          }]
        },
        customer_case_study: {
          text: "Company Case Study",
          data: [{
            description: "Good Client"
          }]
        }
      }],
      hideClass: true
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.onChangeHandle = _this.onChangeHandle.bind(_assertThisInitialized(_this));
    _this.deleteColum = _this.deleteColum.bind(_assertThisInitialized(_this));
    _this.toogleClass = _this.toogleClass.bind(_assertThisInitialized(_this));
    _this.deleteRow = _this.deleteRow.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(home, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "deleteRow",
    value: function deleteRow(rowname) {
      var _this2 = this;

      var _this$state = this.state,
          columData = _this$state.columData,
          formData = _this$state.formData;
      swal({
        title: "Are you sure you want  to  delete  this  item?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          columData.map(function (cdata, index) {
            Object.keys(cdata).map(function (oneKey, i) {
              if (oneKey == rowname) {
                delete cdata[oneKey];
                delete formData[rowname]; // console.log(formData,rowname, formData[rowname], formData["company_info"]);
                //  delete formData[oneKey]
              }
            });
          });

          _this2.setState({
            columData: columData,
            formData: formData
          }, function () {
            swal("Poof! Your itemhas been deleted!", {
              icon: "success"
            });
          });
        } else {}
      });
    }
  }, {
    key: "onChangeHandle",
    value: function onChangeHandle(e) {
      this.setState({
        formData: _objectSpread(_objectSpread({}, this.state.formData), {}, _defineProperty({}, e.target.name, e.target.value))
      });
    }
  }, {
    key: "toogleClass",
    value: function toogleClass() {
      var hideClass = this.state.hideClass;
      hideClass = !hideClass;
      this.setState({
        hideClass: hideClass
      });
    }
  }, {
    key: "deleteColum",
    value: function deleteColum(id) {
      var _this3 = this;

      var columData = this.state.columData;
      swal({
        title: "Are you sure you want  to  delete  this  item?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          columData.map(function (cdata, index) {
            Object.keys(cdata).map(function (oneKey, i) {
              cdata[oneKey].data = cdata[oneKey].data.filter(function (data, index) {
                return id != index;
              });
            });
          });

          _this3.setState({
            columData: columData
          }, function () {
            swal("Poof! Your itemhas been deleted!", {
              icon: "success"
            });
          });
        } else {}
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var _this4 = this;

      var _this$state2 = this.state,
          formData = _this$state2.formData,
          columData = _this$state2.columData;
      console.log(formData);
      var overall_scoor = formData.overall_scoor,
          box_header = formData.box_header,
          product_description = formData.product_description,
          funding_history = formData.funding_history,
          fetaures = formData.fetaures,
          customer_case_study = formData.customer_case_study,
          company_info = formData.company_info;
      columData.map(function (cdata, index) {
        if (!!cdata.product_description && cdata.product_description.data.length > 2) {
          swal({
            title: "You cant add more  than  3  items",
            icon: "warning"
          });

          _this4.setState({
            formData: {
              product_description: "",
              funding_history: "",
              company_info: "",
              fetaures: "",
              customer_case_study: "",
              overall_scoor: "Score",
              box_header: "Box"
            }
          }, function () {
            $("#newVendor").modal("hide");
          });
        } else {
          if (cdata.product_description != undefined) {
            cdata.product_description.data.push({
              description: product_description
            });
          }

          if (cdata.funding_history != undefined) {
            cdata.funding_history.data.push({
              description: funding_history
            });
            Object.keys(cdata.funding_history.subitems).map(function (oneKey, i) {
              if (oneKey == "Founded") {
                cdata.funding_history.subitems[oneKey].push("2005");
              }

              if (oneKey == "KeyInvestors") {
                cdata.funding_history.subitems[oneKey].push("DFG, scale, venture partners");
              }

              if (oneKey == "Founders") {
                cdata.funding_history.subitems[oneKey].push("Arone Levie, Dylon smith");
              }
            });
          }

          if (cdata.fetaures != undefined) {
            cdata.fetaures.data.push({
              description: fetaures
            });
          }

          if (cdata.customer_case_study != undefined) {
            cdata.customer_case_study.data.push({
              description: customer_case_study
            });
          }

          if (cdata.company_info != undefined) {
            cdata.company_info.data.push({
              description: company_info
            });
          }

          cdata.overall_scoor.data.push({
            description: overall_scoor
          });
          cdata.box_header.data.push({
            description: box_header
          });

          _this4.setState({
            columData: columData,
            formData: {
              product_description: "",
              funding_history: "",
              company_info: "",
              fetaures: "",
              customer_case_study: "",
              overall_scoor: "Score",
              box_header: "Box"
            }
          }, function () {
            $("#newVendor").modal("hide");
          });
        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (!!props.data && !!props.data.isSuccess) {}
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var formData = this.state.formData || {};

      var errors = _objectSpread({}, this.defaultErrors);

      var isError = false;

      if (!!!formData.email) {
        errors.email = true;
        isError = true;
      }

      if (!!!formData.password) {
        errors.password = true;
        isError = true;
      }

      if (!!formData.password && formData.password.length < 4) {
        errors.password = true;
        isError = true;
      }

      return {
        isError: isError,
        errors: errors
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state3 = this.state,
          columData = _this$state3.columData,
          formData = _this$state3.formData,
          hideClass = _this$state3.hideClass;
      console.log(formData);
      var colSpan = "";
      var colSpanTd = 2;
      columData.map(function (data, key) {
        colSpanTd = !!data.funding_history ? data.funding_history.subitems.Founded.length + 1 : 2;

        if (!!data.product_description && data.product_description.data.length == 1) {
          colSpan = "twoCol";
        }

        if (!!data.product_description && data.product_description.data.length == 2) {
          colSpan = "threeCol";
        }

        if (!!data.product_description && data.product_description.data.length == 3) {
          colSpan = "fourCol";
        } // if(data.product_description.data.length==4){
        //   colSpan= "fourCol"
        // }

      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "Loginp"
      }, /*#__PURE__*/_react.default.createElement("table", {
        className: "cTable ".concat(colSpan)
      }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "#",
        "data-toggle": "modal",
        "data-target": "#newVendor"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "img/add-new.png"
      }), /*#__PURE__*/_react.default.createElement("span", null, "Add New Vendor"))), columData.map(function (data, key) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!data.box_header ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, data.box_header.data.map(function (subdata, key) {
          return /*#__PURE__*/_react.default.createElement("th", {
            key: key
          }, /*#__PURE__*/_react.default.createElement("img", {
            src: "img/box.png"
          }), /*#__PURE__*/_react.default.createElement("span", null, "Box "), data.box_header.data.length > 1 ? /*#__PURE__*/_react.default.createElement("i", {
            className: "fa fa-times",
            onClick: function onClick() {
              return _this5.deleteColum(key);
            },
            "aria-hidden": "true"
          }) : "");
        })) : "");
      })), /*#__PURE__*/_react.default.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!data.overall_scoor ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, data.overall_scoor.text, " "), data.overall_scoor.data.map(function (subdata, key) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: key,
            className: "tac"
          }, /*#__PURE__*/_react.default.createElement("img", {
            src: "img/score-b.png"
          }));
        })) : "");
      })), /*#__PURE__*/_react.default.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!data.product_description ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, data.product_description.text, "  "), data.product_description.data.map(function (subdata, key) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/_react.default.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!data.funding_history ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, data.funding_history.text, /*#__PURE__*/_react.default.createElement("span", {
          onClick: function onClick() {
            return _this5.deleteRow("funding_history");
          },
          className: "closeSec"
        }, /*#__PURE__*/_react.default.createElement("i", {
          class: "fa fa-times-circle",
          "aria-hidden": "true"
        })), " ", /*#__PURE__*/_react.default.createElement("i", {
          onClick: function onClick() {
            return _this5.toogleClass();
          },
          className: "fa fa-angle-down",
          "aria-hidden": "true"
        })), data.funding_history.data.map(function (subdata, key) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        colSpan: colSpanTd,
        className: hideClass ? "st" : "st stOpen"
      }, /*#__PURE__*/_react.default.createElement("table", {
        className: "subTable"
      }, columData.map(function (data, key) {
        if (data.funding_history == undefined) return null;
        return Object.keys(data.funding_history.subitems).map(function (oneKey, i) {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: i
          }, /*#__PURE__*/_react.default.createElement("td", null, oneKey), data.funding_history.subitems[oneKey].map(function (item, key) {
            return /*#__PURE__*/_react.default.createElement("td", null, item);
          }));
        });
      })))), /*#__PURE__*/_react.default.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!data.company_info ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, data.company_info.text, " ", /*#__PURE__*/_react.default.createElement("span", {
          onClick: function onClick() {
            return _this5.deleteRow("company_info");
          },
          className: "closeSec"
        }, /*#__PURE__*/_react.default.createElement("i", {
          class: "fa fa-times-circle",
          "aria-hidden": "true"
        }))), data.company_info.data.map(function (subdata, key) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/_react.default.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!data.fetaures ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, data.fetaures.text, " ", /*#__PURE__*/_react.default.createElement("span", {
          onClick: function onClick() {
            return _this5.deleteRow("fetaures");
          },
          className: "closeSec"
        }, /*#__PURE__*/_react.default.createElement("i", {
          class: "fa fa-times-circle",
          "aria-hidden": "true"
        })), " "), data.fetaures.data.map(function (subdata, key) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/_react.default.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!data.customer_case_study ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, data.customer_case_study.text, " ", /*#__PURE__*/_react.default.createElement("span", {
          onClick: function onClick() {
            return _this5.deleteRow("customer_case_study");
          },
          className: "closeSec"
        }, /*#__PURE__*/_react.default.createElement("i", {
          class: "fa fa-times-circle",
          "aria-hidden": "true"
        }))), data.customer_case_study.data.map(function (subdata, key) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "modal fade",
        id: "newVendor",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react.default.createElement("h5", {
        className: "modal-title",
        id: "exampleModalLabel"
      }, "Add New Vendor"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, /*#__PURE__*/_react.default.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
        className: "modal-body"
      }, formData.product_description != undefined ? /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("label", {
        for: "product_description"
      }, "Product Description"), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        className: "form-control",
        value: formData.product_description,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        name: "product_description"
      })) : "", formData.funding_history != undefined ? /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("label", {
        for: "funding_history"
      }, "Funding History"), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        value: formData.funding_history,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        className: "form-control",
        name: "funding_history"
      })) : "", formData.company_info != undefined ? /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("label", {
        for: "company_info"
      }, "Company Info"), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        value: formData.company_info,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        className: "form-control",
        name: "company_info"
      })) : "", formData.fetaures != undefined ? /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("label", {
        for: "fetaures"
      }, "Features"), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        value: formData.fetaures,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        className: "form-control",
        name: "fetaures"
      })) : "", formData.customer_case_study != undefined ? /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("label", {
        for: "customer_case_study"
      }, "Customer case study"), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        value: formData.customer_case_study,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        className: "form-control",
        name: "customer_case_study"
      })) : "", /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this5.handleSubmit();
        },
        className: "btn btn-primary"
      }, "Submit"))))));
    }
  }]);

  return home;
}(_react.Component);

exports.default = home;