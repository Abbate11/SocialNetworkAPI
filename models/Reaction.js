const { Schema } = require('mongoose');

// Reaction Schema
const reactionSchema = new Schema(
  {
    reactionId: {
      Id: Schema.ObjectId,
    },
    reationBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;
