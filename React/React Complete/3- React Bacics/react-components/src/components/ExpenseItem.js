import './ExpenseItem.css';

function ExpenseItem() {
    return ( 
        <div className="expense-item">
            <div>March 27</div>
            <div className="expense-item__description">
                <h2>Some weird stuff</h2>
                <div className="expense-item__price">$19.99</div>
            </div>
        </div>
    );
}

export default ExpenseItem;