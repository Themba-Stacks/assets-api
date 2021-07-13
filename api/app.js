const express = require("express");
let cheeps = require("./mock_cheeps.json");
const profile = require("./mock_profile.json");
const fs = require("fs");
const port = 3000;
const app = express();

app.use(express.json());





app.get("/cheeps", (req, res) => {
  res.send(cheeps);
});

app.get("/profile", (req, res) => {
  res.send(profile);
});

app.post("/cheep", (req, res) => {
  fs.readFile("./mock_cheeps.json", (err, data) => {
    const cheepsData = JSON.parse(data);
    console.log(cheepsData);
    cheepsData.cheeps.push(req.body);

    cheeps = cheepsData;

    fs.writeFile(
      "./mock_cheeps.json",
      JSON.stringify(cheepsData, null, 2),
      (err) => console.log(err)
    );
  });
  res.send("success");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
