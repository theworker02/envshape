const HELP = "envshape 1.00 (1.0.0)\n\nUsage:\n  envshape [options] <schema.json>\n\nValidate process.env against a JSON object of KEY -> type.\n\nTypes:\n  string   non-empty string\n  number   finite number (e.g. 8080)\n  bool     true, false, 1, or 0\n\nOptions:\n  -h, --help       Show this help\n  -v, --version    Print 1.0.0\n\nExit 0 when every key matches; otherwise print errors and exit 1.\n\nExamples:\n  envshape schema.json\n  PORT=8080 NAME=app envshape ./env.schema.json\n";
const VERSION = "1.0.0";
module.exports = { HELP, VERSION };
