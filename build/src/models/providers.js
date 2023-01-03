"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
//@ts-ignore
var ObjectId = Schema.ObjectId;
var ProvidersSchema = new Schema({
    id: ObjectId,
    name: String,
});
exports.Providers = mongoose_1.default.model('providers', ProvidersSchema);
