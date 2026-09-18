import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET all games
router.get("/", async (req, res) => {
  try {
    const games = await db.collection("games").find().toArray();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET games by team id
router.get("/team/:teamId", async (req, res) => {
  try {
    const games = await db.collection("games").find({
      $or: [
        { homeTeamId: req.params.teamId },
        { awayTeamId: req.params.teamId }
      ]
    }).toArray();

    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET games by team name
router.get("/teamName/:teamName", async (req, res) => {
  try {
    const games = await db.collection("games").find({
        $or: [
            { homeTeamName: req.params.teamName },
            { awayTeamName: req.params.teamName }
        ]
    }).toArray();

    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;