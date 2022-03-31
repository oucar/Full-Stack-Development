import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    // useState is a hook, and only called inside a component 
    let title = props.title;

    const clickHandler = () => {
        title = 'Updated.';
    };


    return ( 
        <Card className="expense-item">
            {/* date object cannot be outputted as is  */}
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* you just point, don't really execute it. it will be executed when an user clicks on it */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
