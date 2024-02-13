var mongoose = require("mongoose");
var ForeningSchema = new mongoose.Schema(
   {
      Namn: String,
      Aktivitet: String,
      Epostadress: String,
   },
   {
      collection: "forening",
   }
);

module.exports = mongoose.model("ForeningModel", ForeningSchema);
