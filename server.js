var express = require("express")
var cors = require("cors")
const multer = require("multer")
require("dotenv").config()

var app = express()
const upload = multer({ dest: "uploads/" })

app.use(cors())
// eslint-disable-next-line no-undef
app.use("/public", express.static(process.cwd() + "/public"))

app.get("/", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(process.cwd() + "/views/index.html")
})

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log("Your app is listening on port " + port)
})

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const file = req.file
  res.json({ name: file.originalname, type: file.mimetype, size: file.size })
})
