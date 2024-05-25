const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

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
    },
    Username: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

