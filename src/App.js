import React, { useState } from "react";
import { connect } from "react-redux";

import EmployeeList from "./components/Dashboard/EmployeeList";
import { USERS } from "./mockData";
import Login from "./components/Login/Login";

const App = (props) => {
  const { isLoggedIn } = props;
  const [users] = useState(USERS["user"]);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div>
      <EmployeeList items={users} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isLoggedIn } = state;
  return { isLoggedIn };
};

export default connect(mapStateToProps)(App);
