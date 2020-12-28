const app = require("./app");
const port = 3000;
app.listen(port, () => {
  console.log(
    `Hello world Restful API app listing at http://localhost:${port}`
  );
});
