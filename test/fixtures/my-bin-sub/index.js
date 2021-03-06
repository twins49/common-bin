'use strict';

const path = require('path');
const Command = require('../my-bin');

class MainCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.yargs.usage('Usage: my-bin-sub <command> [options]');

    // load directory
    this.load(path.join(__dirname, 'command'));
  }
}

module.exports = MainCommand;
