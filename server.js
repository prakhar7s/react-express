const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Prakhar Shrivastava",
    },
    {
      id: 2,
      name: "John Doe",
    },
    {
      id: 3,
      name: "Akash Sharma",
    },
  ];

  res.json(users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
