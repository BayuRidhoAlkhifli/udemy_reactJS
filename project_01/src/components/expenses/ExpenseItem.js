import { useState } from "react";
import "../../assets/styles/ExpenseItem.scss";
import ExpenseDate from "../expenses/ExpenseDate";
import Button from "../UI/Button";
import Card from "../UI/Card";

const ExpenseItem = ({ data }) => {
  const [title, setTitle] = useState(data.title);

  const clickHandler = () => {
    return setTitle((prevState, state) => console.log(prevState, state));
}

  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__price">${data.amount}</span>
      </div>
      <Button onClick={clickHandler} label={"Change Label"} />
    </Card>
  );
};

export default ExpenseItem;
