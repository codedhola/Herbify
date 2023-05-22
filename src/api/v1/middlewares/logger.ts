import { format, createLogger, transports} from "winston";
const { combine, timestamp, label, printf /*prettyPrint*/} = format

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });

  export const errorLogs = createLogger({
    level: 'error',
    format: combine(
        label({ label: 'Errors'}),
        timestamp(),
        myFormat
        // prettyPrint()
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'errors.log' })
    ]
  })  

  export const logger = createLogger({
      level: 'info',
      format: combine(
          label({ label: 'Application Logs'}),
          timestamp(),
          myFormat
          // prettyPrint()
      ),
      transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs.log' })
      ]
    })