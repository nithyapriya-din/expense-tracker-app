
import React, { useState } from 'react';
import { db } from '../firebase';

function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    db.collection('expenses').add({
      amount,
      category,
      date,
      description
    }).then(() => {
      console.log('Expense added');
    }).catch(error => console.error(error.message));
  };

  return (
    <form onSubmit={addExpense}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        {/* Add more options here */}
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description (Optional)" />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
