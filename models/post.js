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
    offerOrRequest: {
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
    // REQUEST
    neededBy: Date,
    requestOnBehalfOf: String,
    // SERVICE
    onlineOrRemote: { type: Boolean, default: false },
    // OFFER > GOODS
    pickUpBy: Date,
    pickUpOnly: { type: Boolean, default: false },
    atCurbNow: { type: Boolean, default: false },
    // REQUEST > GOODS
    dropOffNeeded: { type: Boolean, default: false },
    lackConsistentCommunication: { type: Boolean, default: false },
    // OFFER > SERVICE
    offeredUntil: Date,
    offerCapacity: String,
    limitedCapacity: { type: Boolean, default: false },
    // REQUEST > SERVICE
    personsRequestingService: String,
    groupRequest: { type: Boolean, default: false },
    // EVENT DATA
    startDate: Date,
    endDate: Date,
    startTime: String,
    endTime: String,
    eventSpaceCapacity: Number,
    eventSpaceRules: String,
    eventHostOrg: String,
    // MONETARY REQUEST
    cashAppHandle: String,
    venmoHandle: String,
    payPalEmail: String
});

// function that validate the startDate and endDate
function checkDates(endDate) {
    return this.eventDate.startDate <= endDate;
}
  
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;