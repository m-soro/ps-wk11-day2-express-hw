/**
First Express Homework

Requirements
On the home page (get "/"), users should see:

"99 Bottles of beer on the wall"
a link that says "take one down, pass it around"
this should link to /98, where the number represents the number of bottles left.
When a number is given in the url (get "/:number_of_bottles"), users should see:

The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
If there are 0 bottles left, do not show a link to "take one down"

Add a link to start over, which directs the user back to the home page.

Hints
You should use an anchortag with an hrefto link to the next 'page'
*/

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let start = 99;
  res.send(`<h1>${start} Bottles of beer on the wall</h1>
  <a href=${(start -= 1)}>Take one down, pass it around</a>`);
});

app.get("/:num", (req, res) => {
  let num = req.params.num;

  if (num <= 0) {
    res.send(
      `<h1>${num} Bottles of beer on the wall</h1>
     <a href="/">Click to start again!</a>`
    );
  } else {
    res.send(
      `<h1>${num} Bottles of beer on the wall</h1>
     <a href=${(num -= 1)}>Take one down, pass it around</a>`
    );
  }
});

app.listen(port, () => console.log(`Listening to port ${port}`));
