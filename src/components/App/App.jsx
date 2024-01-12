// basic page layout imports at the top, then function, then const, Return and export at the bottom
import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import axios from "axios";
import ShoppingForm from "../ShoppingForm/ShoppingForm.jsx";
import "./App.css";
//
function App() {
  // list is a getter, setList is a setter - useState contains an initially empty array that we wil "set"
  const [shoppingList, setShoppingList] = useState([]);
  //
  useEffect(() => {
    handleGet();
  }, []);

  const handleGet = () => {
    axios
      .get("/api/shopping")
      .then((response) => {
        console.log("Response:", response.data);
        setShoppingList(response.data);
        console.log("Shopping List:", shoppingList);
      })
      .catch((err) => {
        console.log("Error getting list:", err);
      });
  };

  console.log(shoppingList);

  return (
    <div className="App">
      {/* Header component */}
      <Header />
      <main>
        {/* ShoppingForm component */}
        <ShoppingForm handleGet={handleGet} />
        {/* ShoppingList component */}
        <ShoppingList shoppingList={shoppingList} handleGet={handleGet} />
      </main>
    </div>
  );
}

export default App;
