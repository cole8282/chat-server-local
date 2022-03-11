const express = require('express');
const controller = require('./controllers/messages_controller');
const app = express();


app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));


app.get("/api/messages", controller.read);
app.post("/api/messages", controller.create);
app.put("/api/messages/:id", controller.update);
app.delete("/api/messages/:id", controller.delete);


app.listen(3001, () => {
  console.log("Server is running on port 3001");
})