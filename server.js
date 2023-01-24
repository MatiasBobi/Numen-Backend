const app = require("./app")
const port = 3000

app.listen(port, () => {
    console.log(
      `La aplicacion de ejemplo se esta ejecutando en localhost:${port}`
    );
  });