import { Component } from "solid-js";
import { wasteTotals } from '../src/hitung/storeSampah'; // Import the store
import Sidebar from "./pages/insideNav";
import AgGridSolid from 'ag-grid-solid';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TotalPage: Component = () => {
  const columnDefs = [
    { field: 'type', headerName: 'Tipe Sampah' },
    { field: 'totalGram', headerName: 'Total (Gram)' },
    { field: 'totalKilogram', headerName: 'Total (Kilogram)' },
    { field: 'totalTon', headerName: 'Total (Ton)' },
  ];

  const convertToKilogram = (grams: number) => grams / 1000;
  const convertToTon = (grams: number) => grams / 1_000_000;

  const rowData = [
    {
      type: 'Sampah Organik',
      totalGram: wasteTotals.organic,
      totalKilogram: convertToKilogram(wasteTotals.organic),
      totalTon: convertToTon(wasteTotals.organic),
    },
    {
      type: 'Sampah Anorganik',
      totalGram: wasteTotals.inorganic,
      totalKilogram: convertToKilogram(wasteTotals.inorganic),
      totalTon: convertToTon(wasteTotals.inorganic),
    },
    {
      type: 'Sampah Elektrik',
      totalGram: wasteTotals.ewaste,
      totalKilogram: convertToKilogram(wasteTotals.ewaste),
      totalTon: convertToTon(wasteTotals.ewaste),
    },
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
  };

  const backgroundStyles = {
    backgroundImage: `url('./pages/img/backinsides.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
  };

  const contentStyles = {
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '8px',
    margin: 'auto',
  };

  return (
    <div style={backgroundStyles}>
      <Sidebar />
      <div style="padding-left: 107px; width: 100%">
        <div style={contentStyles}>
          <h1>Total Waste</h1>
          <p>Summary of waste collected:</p>
          <div class="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
            <AgGridSolid
              columnDefs={columnDefs}
              rowData={rowData}
              defaultColDef={defaultColDef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPage;
