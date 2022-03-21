import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    { id: 'e0', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 27) },
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
  ]



  return (
    // this is the end state
    <div>
      <h1>Let's get started!</h1>
      <ExpenseItem title={expenses[0].title}/>
      <ExpenseItem/>
      <ExpenseItem/>
      <ExpenseItem/>
      <ExpenseItem/>
    </div>
  );
}

export default App;