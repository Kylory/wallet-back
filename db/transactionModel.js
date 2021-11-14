const { Schema, model } = require("mongoose");
// const mongoosePaginate = require('mongoose-paginate-v2')

const transactionSchema = new Schema(
  {
    date: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: [true, "Выберите тип транзакции"],
      enum: ["increment", "decrement"],
    },
    category: {
      type: String,
      enum: [
        "main",
        "food",
        "car",
        "evolution",
        "children",
        "home",
        "education",
        "other",
      ],
      required: [true, "Выберите категорию"],
    },
    comment: {
      type: String,
    },
    amount: {
      type: Number,
      required: [true, "Укажите сумму транзакции"],
    },
    balance: {
      type: Number,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false, timestamps: true }
);

const Transaction = model("Transaction", transactionSchema);

module.exports = { Transaction };
