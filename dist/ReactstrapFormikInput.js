function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

const ReactstrapFormikInput = ({
  field: { ...fields
  },
  form: {
    touched,
    errors,
    ...rest
  },
  ...props
}) => /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(Label, {
  for: props.id,
  className: "label-color"
}, props.label), /*#__PURE__*/React.createElement(Input, _extends({}, props, fields, {
  invalid: Boolean(touched[fields.name] && errors[fields.name])
})), touched[fields.name] && errors[fields.name] ? /*#__PURE__*/React.createElement(FormFeedback, null, errors[fields.name]) : '');

export default ReactstrapFormikInput;