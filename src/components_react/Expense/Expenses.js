import React,{useState} from 'react';
import ExpenseList from './ExpenseList';
import './Expenses.css'
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';







function Expenses(props)
{
    const [filteredyear,Setyear]=useState('2021');


    const filteredExpenses=props.data.filter(expense=>
        {
            return(expense.date.getFullYear().toString()===filteredyear);
        });
    function Filterchange(selectedYear)
    {
        Setyear(selectedYear);
    }

   
    return(
        <Card className="expenses">
            <ExpenseFilter  selected={filteredyear}  onchangeFilter={Filterchange}/>
            <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
           <ExpenseList items={filteredExpenses}/>


        </Card>
        
    );
}

export default Expenses;