#!/usr/bin/env node
"use strict";

const program = require("commander");
const { enableDevMode, disableDevMode } = require("../lib/dev-mode");

program.version(require("../package.json").version);

program
  .command("enable")
  .description("enable dev mode in ms teams")
  .action(() =>
    enableDevMode().catch(err => {
      console.error(err);
      process.exit(1);
    })
  );

program
  .command("disable")
  .description("disable dev mode in ms teams")
  .action(() =>
    disableDevMode().catch(err => {
      console.error(err);
      process.exit(1);
    })
  );

program.parse(process.argv);
