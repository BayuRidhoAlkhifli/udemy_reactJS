import "./assets/styles/App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new_expense/NewExpense";
import { expenseData } from "./data/data";

const App = () => {
  return (
    <>
      <NewExpense />
      <Expenses data={expenseData} />
    </>
  );
};

export default App;
