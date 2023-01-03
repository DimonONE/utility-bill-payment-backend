"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var internet_js_1 = require("./internet.js");
var users_js_1 = require("./users.js");
var routes = function (app) {
    (0, internet_js_1.internet)(app);
    (0, users_js_1.users)(app);
};
exports.routes = routes;
