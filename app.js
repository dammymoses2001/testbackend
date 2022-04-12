const express = require("express");
const app = express();

app.get("/new", (req, res) => {
    res.status(200).json("/Welcome to FirstFounders/");
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening from ${PORT}`);
});