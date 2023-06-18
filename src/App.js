import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";
//Code to import Remaining.js
import Remaining from "./components/Remaining";
//Code to import ExpenseTotal.js
import ExpenseTotal from "./components/ExpenseTotal";
//Code to import ExpensItems.js
import ExpenseItem from "./components/ExpenseList";
//Code to import ExpensList.js
import ExpenseList from "./components/ExpenseList";
//Code to import AllocationForm.js
import AllocationForm from "./components/AllocationForm";

import { AppProvider } from "./context/AppContext";
import ChangeOfCurrency from "./components/ChangeOfCurrency";
//import AllocationForm from "./components/AllocationForm";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          {/* Add Budget component here under */}
          <div className="col-sm">
            <Budget />
          </div>
          {/* Add Remaining component here under */}
          <div className="col-sm">
            <Remaining />
          </div>
          {/* Add ExpenseTotal component here under */}
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          {/* Add Currency changes Component */}
          <div className="col-sm">
            <ChangeOfCurrency />
          </div>
        </div>
        <h1 className="mt-3">Allocation</h1>
        <div className="row">
          {/* Add ExpenseList component here under */}
          <div className="col-sm">
            <ExpenseList />
          </div>
          {/* Add ExpenseItem component here under */}
          <div className="col-sm">
            <ExpenseItem />
          </div>
        </div>
        {/* Add AllocationForm component here under */}
        <h1 className="mt-3">Change allocation</h1>
        <div className="row">
          <div className="col-sm">
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
