import "../assets/styles/ExpenseItem.scss";
import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ data }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <span className="expense-item__price">${data.amount}</span>
      </div>
    </div>
  );
};

export default ExpenseItem;
