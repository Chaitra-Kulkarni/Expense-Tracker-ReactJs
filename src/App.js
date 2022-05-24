import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'New TV',
    amount: 100,
    date: new Date(2022, 7, 14)
  },
  { 
    id: 2, 
    title: 'Trash Bags', 
    amount: 1, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 3,
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2021, 2, 28)
  },
  {
    id: 4,
    title: 'New Desk (Wooden)',
    amount: 45,
    date: new Date(2022, 5, 12)
  },
  {
    id: 5,
    title: 'Washing Machine',
    amount: 145,
    date: new Date(2020, 3, 19)
  },
  {
    id: 6,
    title: 'Health Insurance',
    amount: 245,
    date: new Date(2019, 12, 29)
  },
  {
    id: 7,
    title: 'New Fridge',
    amount: 55,
    date: new Date(2019, 11, 30)
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
