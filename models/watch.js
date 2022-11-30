const mongoose = require("mongoose")
const watchSchema = mongoose.Schema({
watch_brand: String,
watch_cost: {type:Number,min:150},
watch_color: {type:String,maxLength:15}
})
module.exports = mongoose.model("watch",watchSchema)


