const mongoose = require("mongoose");
require("dotenv").config();

const password = process.argv[2];

const url = process.env.MONGODB_URI.replace("password", password);

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// Note.insertMany([
//   {
//     id: "1",
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: "2",
//     content: "Browser can execute only JavaScript",
//     important: false,
//   },
//   {
//     id: "3",
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ]).then((result) => {
//   console.log("inserted data");
//   mongoose.connection.close();
// });

// const note = new Note({
//   content: "HTML is easy",
//   important: true,
// });

Note.find({ important: true }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
