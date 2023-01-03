"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersPost = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
//@ts-ignore
var ObjectId = Schema.ObjectId;
var UserSchema = new Schema({
    userId: ObjectId,
    name: String,
    email: String,
    password: String,
    date: Date,
    status: String,
});
exports.UsersPost = mongoose_1.default.model('Users', UserSchema);
