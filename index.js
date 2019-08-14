const server = require("./server.js");

const port = process.env.PORT || 4004;
server.listen(port, () =>
  console.log(`Server reporting for duty from ${port}!`)
);
