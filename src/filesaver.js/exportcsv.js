// src/components/ExportCSV.js
import React from 'react';
import { db } from '../firebase';
import { saveAs } from 'file-saver';

function ExportCSV() {
  const exportData = () => {
    db.collection('expenses').get().then(querySnapshot => {
      let csv = 'Amount,Category,Date,Description\n';
      querySnapshot.forEach(doc => {
        const data = doc.data();
        csv += `${data.amount},${data.category},${data.date},${data.description}\n`;
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'expenses.csv');
    });
  };

  return <button onClick={exportData}>Export as CSV</button>;
}

export default ExportCSV;
