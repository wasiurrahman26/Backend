const { model } = require("mongoose");
const { positionSchema } = require("../schemas/positionSchema"); // fix the casing!

const positionmodel = model("position", positionSchema);

module.exports = positionmodel;
