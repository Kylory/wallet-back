const { Schema, model } = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate-v2')

const transactionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },

  email: {
    type: String,
  },

  phone: {
    type: String,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

// contactSchema.plugin(mongoosePaginate)

const Transaction = model('Transaction', transactionSchema)

module.exports = { Transaction }
