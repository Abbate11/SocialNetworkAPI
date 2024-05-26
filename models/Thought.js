const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const newDate = require('../utils/dateFormat');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: [1, 'Flesh this out will ya?'],
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => newDate(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    versionKey: false
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

