const { Schema, model, SchemaTypes } = require("mongoose");
// const mongoosePaginate = require('mongoose-paginate-v2')

const transactionSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      required: [true, "Выберите тип транзакции"],
      enum: ["Доход", "Расход"],
    },
    category: {
      type: String,
      enum: [
        "Основной",
        "Еда",
        "Авто",
        "Развитие",
        "Дети",
        "Дом",
        "Образование",
        "Остальные",
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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // balance: {
    //   type: Number,
    //   required: true,
    // },
  },
  { versionKey: false, timestamps: true }
);

const Transaction = model("Transaction", transactionSchema);

// const type =
// const add = type.plus

// const User.methods.sum = () => {
//   return `${this.balance}${add}${this.tra}`
// }

module.exports = { Transaction };
