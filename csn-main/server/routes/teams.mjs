import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

//* GET all teams */
router.get("/", async (req, res) => {
  const teams = await db.collection("teams").aggregate([
    {
      $addFields: { idStr: { $toString: "$_id" } }
    },
    {
      $lookup: {
        from: "players",
        localField: "idStr",
        foreignField: "Team ID",
        as: "players"
      }
    }
  ]).toArray();

  res.json(teams);
});

/* GET team by team name */
router.get("/:name", async (req, res) => {
  try {
    const team = await db
      .collection("teams")
      .findOne({ School: req.params.name });

    if (!team) return res.status(404).json({ message: "Team not found" });
    res.status(200).json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Add a new team to the collection
router.post("/", async (req, res) => {
  try {
    let collection = db.collection("teams");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a team document by name
router.patch("/:name", async (req, res) => {
  try {
    let collection = db.collection("teams");
    const query = { School: req.params.name };
    const updates = { $set: req.body };
    let result = await collection.updateOne(query, updates);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json({
      message: "Team updated successfully",
      modifiedCount: result.modifiedCount
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an entry
router.delete("/:name", async (req, res) => {
  const query = { School: req.params.name };

  const collection = db.collection("teams");
  let result = await collection.deleteOne(query);

  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "Team not found" });
  }

  res.status(200).json({ message: "Team deleted successfully" });
});

export default router;
