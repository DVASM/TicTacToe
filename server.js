//server.js

const app = require("./app");
//const port = 8080;

//console.log("Server log on port "+ port);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
 console.log("Server running on port " + PORT);
});

//app.listen(port);