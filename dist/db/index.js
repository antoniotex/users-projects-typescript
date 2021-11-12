"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config = __importStar(require("./config"));
const User = __importStar(require("./models/User"));
require("dotenv/config");
function isNodeEnvValid(env) {
    return !!env && env in config;
}
// const env = process.env.NODE_ENV;
// console.log(env)
// if(!isNodeEnvValid(env)){
//     throw new Error('Teste')
// }
const seqConfig = config['development'];
exports.sequelize = new sequelize_1.Sequelize(seqConfig);
function buildModel(seq) {
    return {
        User: User.build(seq)
    };
}
exports.models = buildModel(exports.sequelize);
