function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
/*let handleBlur = event => {
    if (this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        this.ignoreNextBlur = false;
        event.target.name = this.props.name;
        return;
    }
};*/

const ReactstrapSelectInput = ({
  field,
  form: {
    isSubmitting,
    touched,
    errors
  },
  disabled = false,
  ...props
}) => {
  let error = errors[field.name];
  let touch = touched[field.name];
  return /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(Label, {
    for: props.inputprops.id,
    className: "label-color"
  }, props.label), /*#__PURE__*/React.createElement(Input, _extends({
    id: props.inputprops.id
  }, field, props, {
    type: "select",
    invalid: Boolean(touched[field.name] && errors[field.name]),
    placeholder: "Test"
  }), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, props.inputprops.defaultOption), props.inputprops.options.map((option, index) => {
    if (option.name) return /*#__PURE__*/React.createElement("option", {
      value: option.id,
      key: index
    }, option.name);
    return /*#__PURE__*/React.createElement("option", {
      value: option,
      key: index
    }, option);
  })), touch && error && /*#__PURE__*/React.createElement(FormFeedback, null, error));
};

export default ReactstrapSelectInput;