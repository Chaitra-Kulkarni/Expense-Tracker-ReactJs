import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'New TV',
    amount: 100,
    date: new Date(2022, 7, 14),
  },
  { 
    id: 2, 
    title: 'Trash Bags', 
    amount: 1, 
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
  {
    id: 5,
    title: 'Washing Machine',
    amount: 145,
    date: new Date(2022, 5, 12),
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
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
