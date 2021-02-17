const getAll = () => {
  return [
    {
      id: 1,
      title: "Detergente",
      price: 140,
      available_quantity: 20,
      condition: "new",
      description: "El mejor detergente del mundo",
      warranty: "1 día",
    },
    {
      id: 2,
      title: "Suavizante",
      price: 290,
      available_quantity: 20,
      condition: "new",
      description: "El mejor suavizante del mundo",
      warranty: "2 día",
    },
  ];
};

module.exports = { getAll };
