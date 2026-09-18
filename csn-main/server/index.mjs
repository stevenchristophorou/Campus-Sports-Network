import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import teams from "./routes/teams.mjs";
import players from "./routes/players.mjs";
import games from "./routes/games.mjs";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /teams routes
app.use("/teams", teams);

// Load the /players routes
app.use("/players", players);

app.use("/games", games);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
