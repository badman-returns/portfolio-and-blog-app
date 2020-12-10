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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encryption = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const SECRET = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJOYW1lIjoiQWJoaWppdCBNdWtoZXJqZWUiLCJFbWFpbCI6ImFiaGlqaXRAZ21haWwuY29tIiwiSXNFbWFpbFZlcmlmaWVkIjpmYWxzZSwiSXNQcmVtaXVtTWVtYmVyIjpmYWxzZSwiQ3JlYXRlZE9uIjoiMjAyMC0wMS0yOVQxMjo1NTowMC4zMDNaIiwiaWF0IjoxNTgwMzA1MjE5fQGtqRRRLJMoI87k9Kee5Hv8pDszXOEnFZBJWt5VQdAA';
class Encryption {
    constructor() {
    }
}
exports.Encryption = Encryption;
Encryption.encryptPassword = (password) => {
    return bcryptjs_1.default.hashSync(password, 10);
};
Encryption.decryptPassword = (password, hash) => {
    return bcryptjs_1.default.compareSync(password, hash);
};
Encryption.createToken = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        try {
            const token = jwt.sign(data, SECRET, {
                expiresIn: '1d',
            });
            resolve(token);
        }
        catch (error) {
            reject(error);
        }
    });
});
Encryption.validateToken = (token) => {
    try {
        return jwt.verify(token, SECRET);
    }
    catch (error) {
        console.log(error);
        return null;
    }
};
