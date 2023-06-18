import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ChangeOfCurrency = () => {
  const { dispatch, selectedOption } = useContext(AppContext);

  const currencyChange = (val, e) => {
    selectedOption(e.target.value);
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
        value={selectedOption}
        //name="hover_color"
        id="currency"
        onChange={(event) => currencyChange(event.target.value)}
      >
        <option value="£">(£ Pound)</option>
        <option value="$">($ Dollar)</option>
        <option value="€">(€ Euro)</option>
        <option value="₹">(₹ Rupee)</option>
      </select>
    </div>
  );
};

export default ChangeOfCurrency;
