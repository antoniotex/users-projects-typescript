"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.development = void 0;
require("dotenv/config");
function getOptions(prefix, aditionalOptions) {
    return Object.assign({ database: 'finalmente', dialect: 'mssql', host: process.env[`${prefix}_DB_HOST`], port: Number.parseInt(process.env[`${prefix}_DB_PORT`] || '1433', 10), username: process.env[`${prefix}_DB_USERNAME`], password: process.env[`${prefix}_DB_PASSWORD`], define: {
            timestamps: true
        } }, aditionalOptions);
}
exports.development = getOptions('DEV');
exports.test = getOptions('TEST');
