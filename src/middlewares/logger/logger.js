import winston from 'winston';
import dotenv from 'dotenv';

dotenv.config();


const customLevels = {
    levels: {
        debug: 0,
        http: 1,
        info: 2,
        warning: 3,
        error: 4,
        fatal: 5
    }
}

const devLogger = new (winston.Logger)({
    levels: customLevels.levels,
    transports: [
        new winston.transports.Console({level: 'debug'})
    ]
});


const prodLogger = winston.createLogger({
    levels: customLevels.levels,
    transports: [
        new winston.transports.Console({level: 'info'}),
        new winston.transports.File({
            filename: 'errors.log',
            level: 'info',
        })

    ]
});


export const addLogger = (req, res, next) => {
    if(process.env.NODE_ENV === 'production') {
      req.logger = prodLogger;
      req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    } else {
      req.logger = devLogger;
      req.logger.verbose(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    }
  
    next()
}