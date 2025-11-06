import express from "express";
import { Caught } from "./models.js";

const app = express();
app.use(express.json());

app.get("/caught", async (req, res) => {
  res.json(
    await Caught.findAll({
      attributes: ["id", "FishId", "dateOfCatch", "caughtBy"],
    })
  );
});

app.post("/caught", async (req, res) => {
  const { length, weight, dateOfCatch, caughtBy, FishId } = req.body;
  if (!(length && weight && dateOfCatch && caughtBy && FishId))
    return res.status(400).json({ msg: "Missing attrs!" });
  if (
    await Caught.findOne({
      where: { length, weight, caughtBy, FishId },
    })
  )
    return res
      .status(400)
      .json({ msg: "There's already a catch with these exact details!" });
  await Caught.create({ length, weight, dateOfCatch, caughtBy, FishId });
  res.status(201).json({ msg: "Created!" });
});

app.delete("/caught/:id", async (req, res) => {
  const caught = await Caught.findByPk(req.params.id);
  if (!caught) return res.status(404).json({ msg: "Catch not found!" });
  await caught.destroy();
  res.json({ msg: "Deleted!" });
});

const port = 3000;
app.listen(port, () => console.log(`Listening: http://localhost:${port}`));
