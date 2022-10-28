import React, { Component } from "react";
import FormComponent from "./FormComponent";
import NavbarComponent from "./NavbarComponent";
import TableComponent from "./TableComponent";

export default class Crud extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <h3 className="mb-4">Belajar CRUD React JS</h3>
          <TableComponent />
          <FormComponent />
        </div>
      </div>
    );
  }
}
