import "../assets/styles/ExpenseItem.css";

const ExpenseItem = ({ ...props }) => {
  const { data } = props;

  return (
    <div className="expense-item">
      <h1>{data.date}</h1>
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <span className="expense-item__price">${data.amount}</span>
      </div>
    </div>
  );
};

export default ExpenseItem;
