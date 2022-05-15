async function getItems(req, res) {
  console.log("Getting items");
  res.send({ name: "Buy Pencils", completed: false, priorItems: [] });
}

module.exports = getItems;
