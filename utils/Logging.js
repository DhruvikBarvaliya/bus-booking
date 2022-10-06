const pino = require("pino");
const dayjs = require("dayjs");

const logger = pino({
    transport: {
        target: "pino-pretty"
    },
    level: "info",
    base: {
        pid: false
    },
    timestamp: () => `,"time":"${dayjs().format("h:mm:ss a")}"`
},
)

module.exports = logger