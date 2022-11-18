import "../../assets/styles/Expense.scss";
import ExpenseItem from "../expenses/ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ data }) => {
  return (
    <Card className="expense">
      {data.map((items) => (
        <ExpenseItem key={`${items.id + Math.random()}_expense`} data={items} />
      ))}
    </Card>
  );
};

export default Expenses;
