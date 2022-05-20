import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {


    const [title, setTitle] = useState(props.title);

    const changeTitleHandler = () => {
        setTitle(12)
    }

    return (
        <div className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}K</div>
                <button onClick={changeTitleHandler}>Click Me!</button>
            </div>
        </div>
    )
}

export default ExpenseItem;