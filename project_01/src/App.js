import './assets/styles/App.css';
import React from "react";
import Expense from './components/Expense';
import { getDate } from './utils/helper';

const number = 100;

const expenseData = [
  {
    id: Math.floor(Math.random() * number),
    date: getDate("2022-01-12"),
    title: `Item ${Math.floor(Math.random() * number)}`,
    amount: Math.round(Math.random() * number) / number,
  },
  {
    id: Math.floor(Math.random() * number),
    date: getDate("2022-01-25"),
    title: `Item ${Math.floor(Math.random() * number)}`,
    amount: Math.round(Math.random() * number) / number,
  },
  {
    id: Math.floor(Math.random() * number),
    date: getDate("2022-02-09"),
    title: `Item ${Math.floor(Math.random() * number)}`,
    amount: Math.round(Math.random() * number) / number,
  },
  {
    id: Math.floor(Math.random() * number),
    date: getDate("2022-03-16"),
    title: `Item ${Math.floor(Math.random() * number)}`,
    amount: Math.round(Math.random() * number) / number,
  }
];

const App = () => {
  return (
    <Expense data={expenseData} />
  );
}

export default App;
