const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type: String,
        required:true,
        unique:true
    },
    profilePicture:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",

    },
    tickets: [
		{
			showtime: { type: mongoose.Schema.ObjectId, ref: 'Showtime' },
			seats: [
				{
					row: { type: String },
					number: { type: Number }
				}
			]
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	}
},{timestamps:true});

// const User = mongoose.model("signup",EmployeeSchema)

// module.exports = User;

module.exports = mongoose.model("signup",EmployeeSchema)
