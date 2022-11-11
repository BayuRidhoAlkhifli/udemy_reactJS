import "../assets/styles/Expense.scss";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expense = ({ data }) => {
  return (
    <div className="expense">
      {data.map((value, index) => (
        <ExpenseItem key={`${data[index].id}_expense`} data={data[index]} />
      ))}
    </div>
  );
};

export default Expense;
