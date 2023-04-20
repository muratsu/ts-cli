"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = "fetch <page>";
exports.desc = "Fetch <page> and display contents";
const builder = (yargs) => {
    return yargs.positional("page", { type: "string", demandOption: true });
};
exports.builder = builder;
const handler = (argv) => {
    const { page } = argv;
    console.log(process.env.OPENAI_API_KEY);
    process.stdout.write(`contents of ${page}`);
    process.exit(0);
};
exports.handler = handler;
