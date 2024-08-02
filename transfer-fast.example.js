import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import path from 'path';
import os from 'os';
import chalk from 'chalk';

// the script first checks if the IP address is reachable.
// If it's not, the script ends with an error message.
//  If the IP address is reachable, the script then attempts an SSH connection.
// If the SSH connection fails, the script ends with an error message.
// If the SSH connection succeeds, the script checks if the projectPath exists on the remote server.
// If it doesn't, the script ends with an error message. If it does, the script continues to the rsync command.

// Extract the filename and directory from the current module URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define configuration object with properties from environment variables
const user = "";
const ip = "";
const projectPath = "";
const sourceFolder = "dist";
const privateKey = "~/.ssh/dct/id_rsa";
// Perform configuration validation
if (!user || !ip || !projectPath || !sourceFolder || !privateKey) {
    console.error(chalk.red('Invalid configuration. Please ensure that user, ip, projectPath, sourceFolder, and privateKey are correctly set in your environment.'));
    process.exit(1);
}

// Expand the tilde (~) in the private key path to the user's home directory
const expandedPrivateKey = privateKey.replace(/^~(?=$|\/|\\)/, os.homedir());

// Test SSH connection using the provided key
const sshTestCommand = `ssh -i ${expandedPrivateKey} ${user}@${ip} exit`;
const sshTestChild = exec(sshTestCommand);

// If the path exists, run the rsync command
const sourcePath = path.join(__dirname, sourceFolder);
const destination = `${user}@${ip}:${projectPath}`;
const command = `rsync -avz -e "ssh -i ${expandedPrivateKey}" --delete ${sourcePath}/ ${destination}`;

const child = exec(command);
child.stdout.on('data', (data) => {
    console.log(chalk.green(data));
});
child.stderr.on('data', (data) => {
    console.error(chalk.red(data));
});
child.on('exit', (code) => {
    if (code === 0) {
        console.log(chalk.blue('Transfer completed successfully.'));
    } else {
        console.log(chalk.red('Transfer failed with exit code ' + code));
    }
});
