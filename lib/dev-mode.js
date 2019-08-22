"use strict";

const asar = require("asar");
const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const root = "/Applications/Microsoft Teams.app/Contents/Resources";
const asarFile = path.join(root, "app.asar");
const unpackedDir = path.join(root, "app.asar.unpacked");

exports.enableDevMode = async () => {
  await setEnvName("development");
  console.log(
    'Restart Microsoft Teams to see "Development" options in the toolbar'
  );
};

exports.disableDevMode = async () => {
  await setEnvName("production");
  console.log("Restart Microsoft Teams to run in regular user mode");
};

async function setEnvName(name) {
  console.log("Extracting Microsoft Teams electron bundle...");
  try {
    await asar.extractAll(asarFile, unpackedDir);
  } catch (err) {
    if ((err.code = "EACCES")) {
      console.error();
      console.error(`Cannot write to "${root}"\n`);
      console.error("Please run again with sudo");
    } else {
      console.error(err);
    }
    process.exit(1);
  }

  console.log(`Writing env_config.json name as "${name}"...`);
  const configFile = path.join(root, "app.asar.unpacked", "env_config.json");
  const config = JSON.parse(readFileSync(configFile));
  config.name = name;
  writeFileSync(configFile, JSON.stringify(config, null, 2));

  console.log("Repackaging bundle...");
  await asar.createPackage(unpackedDir, asarFile);

  console.log("Done!\n");
}
