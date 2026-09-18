import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

//* GET all players */
router.get("/", async (req, res) => {
  try {
    const players = await db.collection("players").find({}).toArray();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* GET player by id */
router.get("/id/:id", async (req, res) => {
  try {
    const player = await db
      .collection("players")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!player) return res.status(404).json({ message: "Player not found" });
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET player by first name */
router.get("/:firstName", async (req, res) => {
  try {
    const player = await db
      .collection("players")
      .findOne({ "First Name": req.params.firstName });

    if (!player) return res.status(404).json({ message: "Player not found" });
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET player by first and lastname */
router.get("/:firstName/:lastName", async (req, res) => {
  try {
    const player = await db.collection("players").findOne({
      "First Name": req.params.firstName,
      "Last Name": req.params.lastName
    });

    if (!player) return res.status(404).json({ message: "Player not found" });
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new player to the collection
router.post("/", async (req, res) => {
  try {
    let collection = db.collection("players");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a player document by id
router.patch("/id/:id", async (req, res) => {
  try {
    let collection = db.collection("players");
    const query = { _id: new ObjectId(req.params.id) };
    const updates = { $set: req.body };

    let result = await collection.updateOne(query, updates);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.status(200).json({
      message: "Player updated successfully",
      modifiedCount: result.modifiedCount
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an entry by id
router.delete("/id/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("players");
  let result = await collection.deleteOne(query);

  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "Player not found" });
  }

  res.status(200).json({ message: "Player deleted successfully" });
});

export default router;
