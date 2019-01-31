let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<br/><center><h1>Welcome to JWT Auth</h1><small>Learning Authentication 1.0</small></center>"
    );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
