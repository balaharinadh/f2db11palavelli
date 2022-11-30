const mongoose = require("mongoose")
const watchSchema = mongoose.Schema({
watch_brand: String,
watch_cost: {type:Number,min:150},
watch_color: String
})
module.exports = mongoose.model("watch",
watchSchema)


