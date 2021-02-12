const all = (req, res) => {
  console.log("HI products");
  res.json([
    { id: 1, name: "toalla" },
    { id: 2, name: "Sábana" },
  ]);
};

const create = (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "Producto dado de alta" });
};
const update = (req, res) => {
  console.log("actualizar");
};
/*

const controller = (req, res) => {
  return {
    all: () => {
      console.log("HI products");
      res.json([
        { id: 1, name: "toalla" },
        { id: 2, name: "Sábana" },
      ]);
    },
  };
};
*/

module.exports = { all, create, update };
