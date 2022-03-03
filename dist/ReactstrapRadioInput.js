function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormGroup, Input, Label } from "reactstrap";

const ReactstrapRadioInput = ({
  field,
  form: {
    isSubmitting,
    setFieldValue,
    touched,
    errors,
    values
  },
  disabled = false,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(FormGroup, {
    check: true,
    inline: true
  }, /*#__PURE__*/React.createElement(Label, {
    for: props.id
  }, /*#__PURE__*/React.createElement(Input, _extends({}, props, {
    type: "radio",
    name: field.name,
    checked: values[field.name] === field.value,
    value: field.value,
    onChange: (event, value) => setFieldValue(field.name, field.value)
  })), props.label));
};

export default ReactstrapRadioInput;