import React, { useState } from 'react';
import XLSX from 'xlsx';

const ExcelViewer = () => {
  const [jsonData, setJsonData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setJsonData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  const createTable = (data) => {
    const table = document.createElement('table');

    for (let i = 0; i < data.length; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < data[i].length; j++) {
        const cell = document.createElement(i === 0 ? 'th' : 'td');
        cell.textContent = data[i][j];
        row.appendChild(cell);
      }

      table.appendChild(row);
    }

    return table;
  };

  return (
    <div>
      <input type="file" id="excelFile" onChange={handleFileChange} />

      <div id="tableContainer">{createTable(jsonData)}</div>
    </div>
  );
};

export default ExcelViewer;