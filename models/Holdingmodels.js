const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");

// ✅ REMOVE `new` — just call `model(...)` directly
const HoldingModel = model("Holding", HoldingSchema);

module.exports = HoldingModel; // ✅ Export the model directly
