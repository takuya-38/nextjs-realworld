import React from "react";

const FormButton = (props) => {
  return (
    <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
      {props.content}
    </button>
  );
};

export default FormButton;
