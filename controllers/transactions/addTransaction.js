const Joi = require("joi");
const { getUserByToken } = require("../../model/users");
const { createTransaction } = require("../../model/transactions");

const joiSchema = Joi.object({
  date: Joi.date().required(),
  type: Joi.string().valid("Доход", "Расход").required(),
  category: Joi.string()
    .valid(
      "Основной",
      "Еда",
      "Авто",
      "Развитие",
      "Дети",
      "Дом",
      "Образование",
      "Остальные"
    )
    .required(),
  comment: Joi.string(),
  amount: Joi.number().required(),
  // balance: Joi.number().required(),
});

const addTransaction = async (req, res) => {
  // const { authorization } = req.headers;
  // const [bearer, token] = authorization.split(" ");

  const { error } = joiSchema.validate(req.body);

  if (error) {
    res.status(400).json({
      Status: "400 Bad Request",
      "Content-Type": "application/json",
      ResponseBody: error.message,
    });

    return;
  }

  const { _id } = req.user;

  const result = await createTransaction(req.body, _id);
  // const { _id } = result._id

  res.status(201).json({
    Status: "201 Created",
    "Content-Type": "application/json",
    ResponseBody: {
      date: result.date,
      type: result.type,
      category: result.category,
      comment: result.comment,
      amount: result.amount,
      // owner: result._id,
    },
  });
};

module.exports = addTransaction;
