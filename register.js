"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createSchemaBridge = _interopRequireDefault(require("uniforms/createSchemaBridge"));

var _JSONSchemaBridge = _interopRequireDefault(require("./JSONSchemaBridge"));

// Register bridge.
_createSchemaBridge["default"].register(_JSONSchemaBridge["default"]);