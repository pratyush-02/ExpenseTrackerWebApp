import { useState } from 'react';
import './NewForm.css';

function NewForm(props)
{
    const [EnteredTitle,ChangeEnteredTitle]=useState('');
    const [EnteredAmount,ChangeEnteredAmount]=useState('');
    const [EnteredDate,ChangeEnteredDate]=useState('');

    function SetEnteredTitle(event)
    {
        ChangeEnteredTitle(event.target.value);//event props gives us the value that is being entered and using use
        //state we are storing it.
    }
    function SetEnteredAmount(event)
    {
        ChangeEnteredAmount(event.target.value);//event props gives us the value that is being entered and using use
        //state we are storing it.
    }
    function SetEnteredDate(event)
    {
        ChangeEnteredDate(event.target.value);//event props gives us the value that is being entered and using use
        //state we are storing it.
    }

    function SubmitHandler(event)
    {
        event.preventDefault();
        const expenseData={
            title:EnteredTitle,
            date:new Date(EnteredDate),
            amount:+EnteredAmount
        };
       props.OnSubmitForm(expenseData);
        ChangeEnteredTitle('');
        ChangeEnteredAmount('');
        ChangeEnteredDate('');
    }

    return(
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"  value={EnteredTitle}      onChange={SetEnteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={EnteredAmount} onChange={SetEnteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={EnteredDate} onChange={SetEnteredDate}/>
                </div>


            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default NewForm;