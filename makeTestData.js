import { Fish } from "./models.js";

const fish = await Fish.create({
  species: "salmon",
  avgLength: 5.5,
  avgWeight: 200.98,
  food: "mmm",
  location: "river",
});

fish.createCaught({
  length: 4,
  weight: 100,
  dateOfCatch: "2025-11-06",
  caughtBy: "Mr. Fisherman",
});
