const axios = require("axios");

const fetchTodos = async (n) => {
  const num = Number(n);
  if (isNaN(num) || num <= 0) throw new Error("Invalid number of todos");
  if (n >= 100) throw new Error("Too Many todos");

  const promises = [];
  for (let i = 1; i <= n; i++) {
    const promise = axios.get(`https://jsonplaceholder.typicode.com/todos/${i * 2}`);
    promises.push(promise);
  }

  const results = await Promise.all(promises);
  return results.map((res) => res.data);
};

const printTodos = (todos) => {
  if (!Array.isArray(todos)) throw new Error("Todos must be an array");

  console.table(todos, ["title", "completed"]);
};

const main = async (n = 20) => {
  try {
    const todos = await fetchTodos(n);
    printTodos(todos);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  fetchTodos,
  main,
  printTodos,
};
