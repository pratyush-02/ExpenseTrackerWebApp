import Chart from '../Charts/Chart';

function ExpenseChart(props)
{
    const ChartDataPoints=[
        {label: 'Jan', value:0},
        {label: 'Feb', value:0},
        {label: 'March', value:0},
        {label: 'April', value:0},
        {label: 'May', value:0},
        {label: 'June', value:0},
        {label: 'July', value:0},
        {label: 'Aug', value:0},
        {label: 'Sept', value:0},
        {label: 'Oct', value:0},
        {label: 'Nov', value:0},
        {label: 'Dec', value:0},

    ];
    for(const expense of props.expenses)
    {
        const expensemonth=expense.date.getMonth();
        ChartDataPoints[expensemonth].value+=expense.amount;
    }
    return(
        <Chart DataPoints={ChartDataPoints}></Chart>

    );
}

export default ExpenseChart;