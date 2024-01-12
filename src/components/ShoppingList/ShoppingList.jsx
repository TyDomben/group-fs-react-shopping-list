import "./ShoppingList.css";
import axios from "axios";

const ShoppingList = ({ shoppingList, handleGet }) => {

const resetForm = () => {
    console.log("Reset Form");

    axios.put('/api/shopping')
    .then(response => {
        console.log("Reset Button, axios put")
        handleGet()
    })
    .catch(err => {
        console.log("Error updating purchased:", err);
    })
}

const clearForm = () => {
    console.log("Clear Form");

    axios.delete('/api/shopping')
    .then(response => {
        console.log("Delete Button, axios delete")
        handleGet()
    })
    .catch(err => {
        console.log("Error Deleting List", err);
    })
}

  return (
    <>
    <div className="listHeader">
      <h2>Shopping List</h2>
      <button onClick={resetForm} className="reset">Reset</button>
      <button onClick={clearForm} className="clear">Clear</button>
    </div>
    
    <div className="listDiv">

      {shoppingList.map((item) => (
        <div key={item.id} className="itemDiv">
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          {/* TODO turnery operator here */}
          <p>{JSON.stringify(item.purchased)}</p>
          <button>Buy</button>
          <button>Remove</button>
        </div>
      ))}

    </div>
    </>
  );
};

export default ShoppingList;
