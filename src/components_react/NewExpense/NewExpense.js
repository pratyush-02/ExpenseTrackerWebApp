import React,{useState} from 'react';
import './NewExpense.css';
import Newform from './NewForm'

function NewExpense(props)
{const [isEdit,SetisEdit]=useState(false);
    function  OnSubmitFormHandler(NewExpenseData)
    {
          const  ExpenseData={
                ...NewExpenseData,
                id: Math.random().toString()
            };

            props.onAddExpense(ExpenseData);
            SetisEdit(false);
    }

    function startEdit()
    {
        SetisEdit(true);
    }
    function stopEdit()
    {
        SetisEdit(false);
    }


    return(
    <div className="new-expense">
        {!isEdit&&(<button onClick={startEdit}>Add New Expense</button>)}
        
        {isEdit&&(<Newform OnSubmitForm={OnSubmitFormHandler} onCancel={stopEdit}></Newform>)}
        
        
    </div>

    );
}

export default NewExpense;