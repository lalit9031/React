import React, { useState } from "react";
import EmployeeList from "./components/Dashboard/EmployeeList";
import { USERS } from "./mockData";
import Login from "./components/Login/Login";

const App = () => {
  const [users] = useState(USERS["user"]);
  const [isLogged, setLogin] = useState(false);

  if (!isLogged) {
    return <Login onLogin={setLogin} />;
  }

  return (
    <div>
      <EmployeeList items={users} />
    </div>
  );
};

export default App;
