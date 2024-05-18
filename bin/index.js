#!/usr/bin/env node

const { program } = require("commander");
const { main } = require("../src/todos");

program
  .command("fetch-default")
  .description("Fetch 20 Even Numbered Todos")
  .action(() => main());

program
  .command("fetch <number>")
  .description("Fetch Custom Number of Even Numbered Todos")
  .action((arg) => main(arg));

program.parse(process.argv);
