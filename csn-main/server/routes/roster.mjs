router.get("/roster", async (req, res) => {
  try {
    const roster = await db.collection("teams").aggregate([
      {
        $lookup: {
          from: "players",
          localField: "_id",
          foreignField: "Team ID",
          as: "players"
        }
      }
    ]).toArray();

    res.json(roster);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});