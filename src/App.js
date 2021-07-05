
import React,{useState} from 'react';
import Expenses from './components_react/Expense/Expenses'; 
import NewExpense from './components_react/NewExpense/NewExpense';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'YOUR TITLE WILL BE DISPLAYED HERE',
    amount: 0,
    date: new Date(2020, 7, 14),
  }
];

function App() {//this app is our component

  const[expenses,SetExpenses]=useState(DUMMY_EXPENSES);

  function onAddExpenseHandler(NewExpenseData)
  {
    const expenseData= {
      ...NewExpenseData
    };

    SetExpenses( prevExpense=>{
      return([expenseData,...prevExpense]);
    });
  }

  return (
    <div className="App">
      
       
       <NewExpense onAddExpense={onAddExpenseHandler} ></NewExpense>
        <Expenses data={expenses}/>
        
      
    </div>
  );
}

export default App;
