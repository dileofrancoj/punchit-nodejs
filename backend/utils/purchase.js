const calculateTotal = (products) =>
  products
    .map(({ price, quantity }) => price * quantity)
    .reduce((prev = 0, current) => prev + current);

module.exports = { calculateTotal };
