import "../../assets/styles/ExpenseDate.scss";

function ExpenseDate({ date }) {
  return (
    <div className="expense-date">
      {Object.keys(date).map((value, key) => (
        <div key={`expense-${value}-${key}`} className={`expense-date__${value}`}>{date[value]}</div>
      ))}
    </div>
  );
}

export default ExpenseDate;
