const express = require("express");

require("dotenv").config();

// ROUTES
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes.rootRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
