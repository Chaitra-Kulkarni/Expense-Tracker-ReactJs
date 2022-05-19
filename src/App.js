import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Garbage Bags',
      amount: 1,
      date: new Date(2022, 7, 14),
    },
    { 
      id: 2, 
      title: 'New TV', 
      amount: 100, 
      date: new Date(2022, 2, 12) 
    },
    {
      id: 3,
      title: 'Car Insurance',
      amount: 294,
      date: new Date(2022, 2, 28),
    },
    {
      id: 4,
      title: 'New Desk (Wooden)',
      amount: 45,
      date: new Date(2022, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
