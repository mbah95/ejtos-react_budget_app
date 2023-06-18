import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { currency, expenses, budget, dispatch } = useContext(AppContext);
  const limitValue = 20000;
  const changeOfBudget = (val) => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (val < totalExpenses) {
      alert("Budget can not be lower than £2000 allocated spending");
    } else if (val > limitValue) {
      alert("The value cannot exceed £20000 funds Limit");
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: val,
      });
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>

      <input
        type="number"
        id="Budget"
        value={budget}
        style={{ marginLeft: "10px", size: 10 }}
        onInput={(event) => changeOfBudget(event.target.value)}
      ></input>
    </div>
  );
};

export default Budget;
