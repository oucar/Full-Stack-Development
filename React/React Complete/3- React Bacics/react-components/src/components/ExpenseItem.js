import { NativeDate } from 'mongoose';
import './ExpenseItem.css';

function ExpenseItem() {



    return ( 
        <div className="expense-item">
            {/* date object cannot be outputted as is  */}
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;