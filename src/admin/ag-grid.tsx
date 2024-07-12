import { Component, createSignal } from 'solid-js';
import { useNavigate } from "@solidjs/router";
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { users, deleteUser, updateUser } from './store';
import './AgGridExample.css';

const AgGridExample: Component = () => {
  const [selectedRow, setSelectedRow] = createSignal(null);
  const navigate = useNavigate();

  const columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Username', field: 'username', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
  ];

  const onSelectionChanged = (event) => {
    const selectedNodes = event.api.getSelectedNodes();
    setSelectedRow(selectedNodes.length > 0 ? selectedNodes[0].data : null);
  };

  const handleDelete = () => {
    if (selectedRow()) {
      deleteUser(selectedRow().id);
      setSelectedRow(null); // Clear selection
    } else {
      alert('Please select a row to delete.');
    }
  };

  const handleUpdate = () => {
    if (selectedRow()) {
      const username = prompt('Enter new username:', selectedRow().username);
      const email = prompt('Enter new email:', selectedRow().email);
      if (username && email) {
        updateUser({ ...selectedRow(), username, email });
      }
      setSelectedRow(null); // Clear selection
    } else {
      alert('Please select a row to update.');
    }
  };

  const rowData = users.map((user) => ({
    id: user.id,
    username: user.username,
    email: user.email,
  }));

  return (
    <div class="container">
      <div class="ag-theme-alpine-dark grid-box">
        <AgGridSolid
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="single"
          onSelectionChanged={onSelectionChanged}
          pagination={true}
          paginationPageSize={10}
          enableRangeSelection={true}
          enableCharts={true}
          rowGroupPanelShow={'always'}
        />
      </div>
      <div class="action-buttons">
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => navigate("/")}>Back Home</button>
      </div>
    </div>
  );
};

export default AgGridExample;
