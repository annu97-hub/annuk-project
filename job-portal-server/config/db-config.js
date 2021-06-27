/**
 * @description database configuration
 */

'use strict';

if (process.env.NODE_ENV === 'dev') {
    exports.config = {
        PORT : 31001,
        dbURI : 'mongodb://localhost:27017/job-portal?authSource=admin'
    }
}
else if (process.env.NODE_ENV === 'live') {
    exports.config = {
        PORT : 41000,
        dbURI : 'mongodb://localhost:27017/job-portal?authSource=admin'
    }
}
else {
    exports.config = {
        PORT : 31001,
        dbURI : 'mongodb://localhost:27017/job-portal?authSource=admin'
    };
}
