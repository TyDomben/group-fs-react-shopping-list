const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");
//
router.get("/", (req, res) => {
  const listItem = `SELECT * FROM "shopping-list" ORDER BY "purchased" ASC, "name" ASC;`;

  pool
    .query(listItem)
    .then((result) => {
      console.log("result data:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error getting results:", err);
      res.sendStatus(500);
    });
});
// payload = req.body
router.post("/", (req, res) => {
  // declare a constant with value of request => body
  const item = req.body;
  // declare a variable for the SQL Query
  const postItem = `
    INSERT INTO "shopping-list" ("name", "quantity", "unit", "purchased")
    VALUES ($1, $2, $3, $4);
    `;
  // connection with DB via pool.js
  pool
    // postItem from the SQL Query
    // values are item/req.body
    .query(postItem, [item.name, item.quantity, item.unit, item.purchased]) // sending specific subvalues of postItem
    .then((result) => {
      console.log(postItem, "post successful");
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error POSTing", err);
      res.sendStatus(500);
    });
});
// update list - RESET function
router.put("/", (req, res) => {
  // updateList is set to the SQL query
  const updateList = `UPDATE "shopping-list" SET "purchased"=FALSE;`;
  pool
    .query(updateList) //query the constant we declared
    .then(() => {
      // then the results are returned
      console.log("result data:");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error updating purchased to false:", err);
      res.sendStatus(500);
    });
});

router.delete("/", (req, res) => {
  const deleteList = `DELETE FROM "shopping-list";`;
  pool
    .query(deleteList) //query the constant we declared
    .then(() => {
      // then the results are returned
      console.log("DELETE:");
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error DELETING data:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
