import React from "react";

import "./EmployeeDetails.css";

const EmployeeDetails = (props) => {
  return (
    <div className="employee-details">
      <div className="employee-details__description">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
        <p>Email: {props.email}</p>
        <p>PhoneNo: {props.phoneNo}</p>
      </div>
    </div>
  );
};

export default EmployeeDetails;
