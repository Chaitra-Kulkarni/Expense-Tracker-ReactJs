import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expenseContent = <p>No Expenses Found!</p>
  if (filteredExpenses.length > 0 ) {
    expenseContent = filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {/* {filteredExpenses.length === 0 ? <p>No Expenses Found.</p> : (filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />))} */}

        {/* {filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)} */}

        {/* {props.items.map((expense) => (
          expense.date.getFullYear() == filteredYear) ?
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem> : null
        )} */}
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;