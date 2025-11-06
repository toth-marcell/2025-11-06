import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("sqlite:data/db.sqlite");

export const Fish = sequelize.define("Fish", {
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avgLength: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  avgWeight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  food: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const Caught = sequelize.define("Caught", {
  length: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dateOfCatch: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  caughtBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Fish.hasMany(Caught);
Caught.belongsTo(Fish);

await sequelize.sync();
