import { NativeDate } from 'mongoose';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return ( 
        <div className="expense-item">
            {/* date object cannot be outputted as is  */}
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;