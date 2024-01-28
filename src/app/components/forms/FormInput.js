import React from "react";

const FormInput = (props) => {
  return (
    <fieldset className="form-group">
      <input
        className="form-control form-control-lg"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </fieldset>
  );
};

export default FormInput;
