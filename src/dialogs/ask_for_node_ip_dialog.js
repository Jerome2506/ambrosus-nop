/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import inquirer from 'inquirer';
import chalk from 'chalk';

const askForNodeIPDialog = (validations, messages) => async () => inquirer.prompt(
  [
    {
      type: 'input',
      name: 'nodeIP',
      message: messages.nodeIPInputInstruction,
      validate: (answer) => validations.isValidIP(answer) || chalk.red(messages.nodeIPInputError(chalk.yellow(answer)))
    }
  ]);

export default askForNodeIPDialog;
