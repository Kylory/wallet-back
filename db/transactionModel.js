const { Schema, model } = require("mongoose");
// const mongoosePaginate = require('mongoose-paginate-v2')

const transactionSchema = new mongoose.Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
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
    // balance: {
    //   type: Number,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const joiSchema = Joi.object({
  date: Joi.date().required(),
  type: Joi.string().required(),
  category: Joi.string().required(),
  comment: Joi.string(),
  amount: Joi.number().required(),
  // balance: Joi.number().required(),
});

// contactSchema.plugin(mongoosePaginate)

const Transaction = model("Transaction", transactionSchema);

module.exports = { Transaction, joiSchema };
