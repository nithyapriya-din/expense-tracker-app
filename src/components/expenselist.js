
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    db.collection('expenses').onSnapshot(snapshot => {
      setExpenses(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div>
      <h2>Your Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.category}: ${expense.amount} on {expense.date} - {expense.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
