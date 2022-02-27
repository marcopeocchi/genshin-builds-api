const ansi = {
    reset: '\u001b[0m',
    red: '\u001b[31m',
    cyan: '\u001b[36m',
    green: '\u001b[32m',
    yellow: '\u001b[93m',
};

class Logger {
    /**
     * Print a standard info message
     * @param {string} proto the context/protocol/section outputting the message
     * @param {string} args the acutal message
     */
    info(proto, args) {
        process.stdout.write(this.formatter(proto, args));
    }
    /**
     * Print a warn message
     * @param {string} proto the context/protocol/section outputting the message
     * @param {string} args the acutal message
     */
    warn(proto, args) {
        process.stdout.write(`${ansi.yellow}${this.formatter(proto, args)}${ansi.reset}`);
    }
    /**
     * Print an error message
     * @param {string} proto the context/protocol/section outputting the message
     * @param {string} args the acutal message
     */
    err(proto, args) {
        process.stdout.write(`${ansi.red}${this.formatter(proto, args)}${ansi.reset}`);
    }
    formatter(proto, args) {
        return `[${proto}]\t${args}\n`;
    }
}
module.exports = Logger;
