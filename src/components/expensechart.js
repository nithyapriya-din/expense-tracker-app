
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { db } from '../firebase';

function ExpenseChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    db.collection('expenses').onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => doc.data());
      const categories = data.map(expense => expense.category);
      const amounts = data.map(expense => expense.amount);

      setChartData({
        labels: categories,
        datasets: [
          {
            label: 'Expenses',
            data: amounts,
            backgroundColor: 'rgba(75,192,192,0.6)'
          }
        ]
      });
    });
  }, []);

  return <Bar data={chartData} />;
}

export default ExpenseChart;
