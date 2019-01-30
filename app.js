let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("<h3>Welcome to JWT Auth</h3>");
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
