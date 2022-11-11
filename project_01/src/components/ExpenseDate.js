import React from "react";
import "../assets/styles/ExpenseDate.scss";

function ExpenseDate({ date }) {
  return (
    <div className="expense-date">
      <div className="expense-date__day">{date.day}</div>
      <div className="expense-date__month">{date.month}</div>
      <div className="expense-date__year">{date.year}</div>
    </div>
  );
}

export default ExpenseDate;
