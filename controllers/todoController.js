import TodoModel from "../models/todoModel";

export const readAllTodo = async (req, res) => {
  TodoModel.find().then((todo) => {
    res.json(todo);
  });
};

export const createTodo = (req, res) => {
  res.send(`create`);
};
