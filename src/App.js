import ExpenseFilter from "./components/ExpenseFilter";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Garbage Bags',
      amount: 1,
      date: new Date(2022, 7, 14),
    },
    { 
      id: 2, 
      title: 'New TV', 
      amount: 100, 
      date: new Date(2022, 2, 12) 
    },
    {
      id: 3,
      title: 'Car Insurance',
      amount: 294,
      date: new Date(2022, 2, 28),
    },
    {
      id: 4,
      title: 'New Desk (Wooden)',
      amount: 45,
      date: new Date(2022, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log(' In App.js');
    console.log(expense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
