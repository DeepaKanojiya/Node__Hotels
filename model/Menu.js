const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },

  price : {
    type : Number,
    required : true,
  },

  taste : {
    type : String,
    enum :['sweet','spicy','sour'],
    required : true,
  },

  is_drink : {
    type : String,
    enum : ['sprite','coco cola','string','thumsap','mountain dew','pepsi','maza','miranda','limka', ""],
  },

  ingredients : {
    type : [String],
    default : [],
  },
  
  num_sales : {
    type : Number,
    default : 0,
  },
})

const menuItem = mongoose.model("menuItem" , menuItemSchema);

module.exports = menuItem;