import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props)
{
    if(props.items.length===0)
    {
        return(<h2 className="expenses-list__fallback">No Expenses Found</h2>)
    }

    return(

      
       <ul className="expenses-list">
            {props.items.map((expensess)=>
                (<ExpenseItem 
                   key={expensess.id}
                   title={expensess.title} 
                   amount={expensess.amount} 
                   date={expensess.date}/>))}
                   
        

       </ul>
          


    );

}

export default ExpenseList;