const getTransactionCategories = async () => {
  return await [
    "Основной",
    "Еда",
    "Авто",
    "Развитие",
    "Дети",
    "Дом",
    "Образование",
    "Остальные",
  ];
};

module.exports = getTransactionCategories;
