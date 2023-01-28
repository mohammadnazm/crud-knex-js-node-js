let express = require("express");

var app = express();
app.use(require("./routes/router"));
let port = 4501;

app.listen(port, () => {
  console.log(`server starts at ${port}`);
});

module.exports = app;
