var mongoose = require('mongoose')

var teamSchema = new mongoose.Schema(
    {
        teamName : {type:String,require:false}
    }
)
