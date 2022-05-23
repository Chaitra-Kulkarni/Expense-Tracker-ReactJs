import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {props.items.map(item => <ExpenseItem title={item.title} amount={item.amount} date={item.date} />)}
      </Card>
    </div>
  );
};

export default Expenses;