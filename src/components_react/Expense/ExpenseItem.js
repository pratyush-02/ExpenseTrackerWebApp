import './ExpenseItem.css'
// import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import Card from './Card';
function ExpenseItem(props)
{
    //const [title,setTitle]=useState(props.title);//useState takes the current value of element that needs to be updated
    //and return two value in the form of array 1-the element that needs to be upadted and a function that updates the value.
//useState maintains the latest state of the element passed it in even if the same statement is executed again.
// for ex initially it's maintains the state where title=props.title then when this statement is again called due
//to set title func the title element is not reinitialised rather it's holds the latest value 'Updated!'.
    // function updatevalue()
    // {
    //     setTitle('Updated!');//this function not only updates the value of element but also calls the component function
    //     //again so that the updated values can be visible on the screen. 
        
    // }

    return(
      <li>
           <Card className="expense-item"> 
         <ExpenseDate date={props.date}/>
          <div className="expense-item__description">
              <h2>{props.title}</h2>
          
          <div className="expense-item__price">Rs.{props.amount}/-</div>
          </div>
          

      </Card>

      </li>
     
    );
    // here we have just pointed the onClick func. by mentioning it's name and not by calling it like updatevalue()
    //because if we call the function like updatevalue(), it will be executed when button statement is executed which
    // is a way before onclick, therefore we want the func. to be executed on onclick then we have to just point it 
    // to the onclick.
}

export default ExpenseItem;