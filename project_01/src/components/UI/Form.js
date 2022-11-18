import React from "react";

export const FormItem = ({label, children}) => {
  return <div className="new-expense__control">
    <label>{label}</label>
    {children}
  </div>;
};

const Form = ({ children }) => {
  return <form>{children}</form>;
};

export default Form;
