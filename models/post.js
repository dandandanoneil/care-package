const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    // POST DATA & ASSOCIATIONS
    created_at: { type: Date, default: Date.now },
    boosted_at: { type: Date, default: Date.now },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    // REQUIRED
    offerOrAsk: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        minlength: [1, 'Title cannot be blank']
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: [1, 'Description cannot be blank']
    },
    // OPTIONAL
    imageURL: {
        type: String
    },
    searchTags: {
        type: Array,
        default: []
    },
    neighborhood: String,
    timeSensitive: { type: Boolean, default: false },
    // ASK
    neededBy: Date,
    askOnBehalfOf: String,
    // SERVICE
    onlineOrRemote: { type: Boolean, default: false },
    // OFFER > GOODS
    pickUpOnly: { type: Boolean, default: false },
    atCurbNow: { type: Boolean, default: false },
    // ASK > GOODS
    dropOffNeeded: { type: Boolean, default: false },
    lackConsistentCommunication: { type: Boolean, default: false },
    // OFFER > SERVICE
    offeredUntil: Date,
    offerCapacity: String,
    limitedCapacity: { type: Boolean, default: false },
    // ASK > SERVICE
    personsASKingService: String,
    groupASK: { type: Boolean, default: false },
    // EVENT DATA
    eventDate: {
        startDate: Date,
        endDate: { 
            type: Date,
            validate: [checkDates, 'Start date must be before end date']
        }
    },
    eventSpaceCapacity: Number,
    eventSpaceRules: String,
    eventHostOrg: String,
    // MONETARY ASK
    cashAppHandle: String,
    venmoHand: String,
    payPalEmail: String
});

// function that validate the startDate and endDate
function checkDates(endDate) {
    return this.eventDate.startDate <= endDate;
}
  
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;