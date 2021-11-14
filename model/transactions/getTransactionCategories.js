const getTransactionCategories = async () => {
  return await [
    { main: "Основной" },
    { food: "Еда" },
    { car: "Авто" },
    { evolution: "Развитие" },
    { children: "Дети" },
    { home: "Дом" },
    { education: "Образование" },
    { other: "Остальные" },
    {
      increment: "Доход",
    },
    { decrement: "Расход" },
  ];
};

module.exports = getTransactionCategories;
