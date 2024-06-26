const mongoose = require("mongoose");

const statusSchema = mongoose.Schema({
    caseId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'cases'

    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"users"
    },
    
        advocateId:{
            type:mongoose.Schema.Types.ObjectId,
            default:null,
            ref:'advocates'

        },
        data:{
            type:Object,
            required: true,
        },
        date:{
            type:Date,
        }, 
     
        comments:{
            type:String
            
        }

},
{ timestamps: true });
module.exports = mongoose.model('evidences', statusSchema)

