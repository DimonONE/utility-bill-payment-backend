"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternetPost = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
//@ts-ignore
var ObjectId = Schema.ObjectId;
var InternetSchema = new Schema({
    id: ObjectId,
    userId: String,
    userName: String,
    price: Number,
    provider: String,
    date: Date,
});
exports.InternetPost = mongoose_1.default.model('Internet', InternetSchema);
