import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ChangeOfCurrency = () => {
  const { dispatch } = useContext(AppContext);

  const currencyChange = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary">
      <label style={{ position: "relative", left: "-10px" }}>Currency:</label>
      <select
        style={{
          backgroundColor: "green",
          border: "2px solid black",
          color: "white",
          hover: "white",
        }}
        //name="hover_color"
        id="currency"
        onChange={(event) => currencyChange(event.target.value)}
      >
        <option style={{ color: "black" }} value="£">
          (£ Pound)
        </option>
        <option style={{ color: "black" }} value="$">
          ($ Dollar)
        </option>
        <option style={{ color: "black" }} value="€">
          (€ Euro)
        </option>
        <option style={{ color: "black" }} value="₹">
          (₹ Rupee)
        </option>
      </select>
    </div>
  );
};

export default ChangeOfCurrency;
