import './assets/styles/App.css';
import ExpenseItem from './components/ExpenseItem';

const now = new Date().toDateString();
const number = 100;

const expenseData = [
  {
    id: Math.floor(Math.random() * number),
    date: now,
    title: "Car Insurance",
    amount: Math.round(Math.random() * number) / number,
  },
  {
    id: Math.floor(Math.random() * number),
    date: now,
    title: "Car Insurance",
    amount: Math.round(Math.random() * number) / number,
  }
];

const App = () => {
  return (
    <>
      {
        expenseData
        .map((value, index) => (
          <ExpenseItem 
            key={`${expenseData[index].id}_expense`}
            data={expenseData[index]}
          />
        ))
      }
    </>
  );
}

export default App;
