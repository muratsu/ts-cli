#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loadEnvConfig_1 = require("./utils/loadEnvConfig");
(0, loadEnvConfig_1.loadEnvConfig)(`${__dirname}/..`);
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    // Use the commands directory to scaffold.
    .commandDir("commands", {
    extensions: ["js", "ts"],
    exclude: /.d.ts$/,
})
    // Enable strict mode.
    .strict()
    // Useful aliases.
    .alias({ h: "help" }).argv;
