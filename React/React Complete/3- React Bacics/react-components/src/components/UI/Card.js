import './Card.css';

const Card = (props) => {

    // Using custom stuff with inner components might be painful
    // Use this logic to dynamically get the classname. Card component now has the 'card' class and whatever expenses you use there.
    // <Card className="expense-item"> --- className is a props name of the Card component.
    const classes = 'card ' + props.className;
    return (
        //   We are using props.children so that we can use custom component inside Card
        //   See ExpenseItem.js
        <div className={classes}>{props.children}</div>
    )
}

export default Card;
