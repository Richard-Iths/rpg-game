const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const cors = require("cors")

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
  console.log("skurt är här")
  res.send({ name: "skurt", color: "green" })
})

// listen

app.listen(PORT, () => console.log("running on port " + PORT))
