let messages = [];
let id = 0;


module.exports = {
  create: (req, res) => {
    let text = req.body.text;
    let time = req.body.time;
    messages.push({id, text, time});
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    let text = req.body.text;
    let updateId = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send(messages);
  },
  delete: (req, res) => {
    const deleteID = req.params.id;
    idToDelete = messages.findIndex(message => message.id == deleteID);
    messages.splice(idToDelete, 1);
    res.status(200).send(messages);
  }
}
