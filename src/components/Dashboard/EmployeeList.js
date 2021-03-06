import React from "react";

import "./EmployeeList.css";

import EmployeeDetails from "./EmployeeDetails";

const EmployeeList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="employee-list__fallback">Found no users.</h2>;
  }

  return (
    <ul className="employee-list">
      <h1>Employee List</h1>
      {props.items.map((users) => (
        <EmployeeDetails
          key={users.id}
          name={users.name}
          age={users.age}
          gender={users.gender}
          email={users.email}
          phoneNo={users.phoneNo}
        />
      ))}
    </ul>
  );
};

export default EmployeeList;
