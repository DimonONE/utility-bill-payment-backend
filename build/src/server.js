"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var index_js_1 = require("./routes/index.js");
var db_js_1 = require("../config/db.js");
var app = (0, express_1.default)();
var port = 8000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
(0, index_js_1.routes)(app);
app.listen(port, function () {
    (0, db_js_1.connectBd)();
    console.log("Example app listening on port ".concat(port));
});
