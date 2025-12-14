import { Schema, Types, model } from "mongoose";

const optionsSchema = new Schema({
	optionID: {
		type: String,
		require: true
	},
	text: {
		type: String,
		require: true
	},
	votes: {
		type: Number,
		default: 0
	}
}, { _id: true });

const pollSchema = new Schema({
	
	userID: {
		
		type: Types.ObjectId,
		ref: "User",
		require: true
	},
	title:{
		
		type: String,
		require: true,
		trim: true
	},
	options: {
		type: [optionsSchema],
		validate: v => v.length >= 2
	},
	open: {
		type: Boolean,
		default: true
	}
}, { timestamps: true });

pollSchema.index({ title: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } });

pollSchema.methods.toJSON = function () {

	const poll = this.toObject();
	delete poll.__v;
	return poll;
};
const Poll = model('Poll', pollSchema);

export default Poll;