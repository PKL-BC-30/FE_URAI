// total.tsx

import { Component } from "solid-js";
import Sidebar from "./pages/insideNav"; // Pastikan path impor sesuai dengan struktur proyek Anda
import AgGridSolid from 'ag-grid-solid';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TotalPage: Component = () => {
  const columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  const defaultColDef = {
    flex: 2,
  };

  const backgroundStyles = {
    backgroundImage: `url('./pages/img/backinsides.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  };

  return (
    <div style={backgroundStyles}>
      <Sidebar /> {/* Tambahkan Sidebar di sini */}
      <div style="padding-left: 107px;">
        <h1>Total Page</h1>
        <p>Isi dari halaman TotalPage.</p>
        <div class="ag-theme-alpine" style={{ height: '100%' }}>
          <AgGridSolid
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalPage;
