import React from "react";
import Table from "react-bootstrap/Table";

const TableComponent = () => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>NO</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableComponent;
