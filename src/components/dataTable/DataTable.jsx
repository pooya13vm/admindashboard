import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";

const DataTable = () => {
  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewBtn">View</div>
            <div className="deleteBtn">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColum)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
