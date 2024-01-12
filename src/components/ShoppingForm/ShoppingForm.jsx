import axios from "axios";
import { useState } from "react";
import "./ShoppingForm.css";

const ShoppingForm = ({ handleGet }) => {
  // we need our STATE for storing input values, which then is POSTED
  // when save button is clicked
  let [itemInput, setItemInput] = useState("");
  let [quantityInput, setQuantityInput] = useState("");
  let [unitInput, setUnitInput] = useState("");

  // we need a function to POST item when save button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/shopping", {
        name: itemInput,
        quantity: quantityInput,
        unit: unitInput,
        purchased: false
      })
      .then((response) => {
        console.log("Posted Item:");
        setItemInput("");
        setQuantityInput("");
        setUnitInput("");
        handleGet();
      })
      .catch((error) => {
        alert("Error in input");
        console.error(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item: </label>
        <input
          value={itemInput}
          className="item"
          placeholder="item"
          type="text"
          onChange={(event) => setItemInput(event.target.value)}
        />
        <label htmlFor="quantity">Quantity: </label>
        <input
          value={quantityInput}
          className="quantity"
          placeholder="quantity"
          type="number"
          onChange={(event) => setQuantityInput(Number(event.target.value))}
        />

        <label htmlFor="unit">Unit: </label>
        <input
          value={unitInput}
          className="unit"
          placeholder="unit"
          type="text"
          onChange={(event) => setUnitInput(event.target.value)}
        />

        <button className="save">Save</button>
      </form>
    </>
  );
};

export default ShoppingForm;
