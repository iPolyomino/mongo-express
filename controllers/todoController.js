export const readAllTodo = (req, res) => {
  const name = req.query.name || "world";
  res.send(`hello ${name} !`);
};
