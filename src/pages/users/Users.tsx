import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import {
    GridColDef,
    GridValueGetterParams,
} from "@mui/x-data-grid";
import { userRows } from "../../Data";
import Add from "../../components/add/Add";
import { useState } from "react";

const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "ID",
        width: 90
    }, {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    }, {
        field: "firstName",
        headerName: "First name",
        width: 150,
        editable: true,
    }, {
        field: "lastName",
        headerName: "Last name",
        width: 150,
        editable: true,
    }, {
        field: "email",
        headerName: "Email",
        type: "string",
        width: 190,
        editable: true,
    }, {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    }, {
        field: "phone",
        headerName: "Phone",
        type: "string",
        width: 150,
        editable: true,
    }, {
        field: "createdAt",
        headerName: "Created At",
        type: "string",
        width: 150,
        editable: true,
    }, {
        field: "verified",
        headerName: "Verified",
        width: 100,
        type: "boolean"
    },
];


const Users = () => {
    const [open, setOpen] = useState(false);

    // TEST THE API

    // const { isLoading, data } = useQuery({
    //   queryKey: ["allusers"],
    //   queryFn: () =>
    //     fetch("http://localhost:8800/api/users").then(
    //       (res) => res.json()
    //     ),
    // });

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {/* TEST THE API */}

            {/* {isLoading ? (
          "Loading..."
        ) : (
          <DataTable slug="users" columns={columns} rows={data} />
        )} */}
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    );
};

export default Users;