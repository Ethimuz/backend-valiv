import chalk from "chalk";


function _logMessage(color: string, message: string){
  console.log(chalk`{${color} ${message}}`);
}

function success(message: string): void {
  _logMessage('green.bold', message);
}

function error(message: string): void {
  _logMessage('red.bold', message);
}

function warning(message: string): void {
  _logMessage('yellow.bold', message);
}

export default { success, error, warning };
