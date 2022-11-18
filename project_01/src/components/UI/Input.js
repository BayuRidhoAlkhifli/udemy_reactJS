import React from "react";

export const Input = () => {
  return <input type="text" />;
};

export const InputNumber = ({ min, step }) => {
  return <input type="number" min={min} step={step} />;
};

export const InputDate = ({minDate, maxDate}) => {
    return <input type="date" min={minDate} max={maxDate} />
}
