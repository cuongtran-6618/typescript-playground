/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nconsole.log('test');\n// Testing the language features\nvar fruits = {\n    apple: ['short', ' long yellow', 'chilla'],\n};\nvar user = ['uuid-1', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203'];\nvar user1 = ['uuid-1', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203'];\nvar getUserInfo = function (user) {\n    user.map(function (attributeOfUser) {\n        console.log(attributeOfUser);\n    });\n};\nfunction getUserFullName(user) {\n    return user[1];\n}\nconsole.log(getUserFullName(user));\n//---------------------------------Enumn---------------------------------\nvar Color;\n(function (Color) {\n    Color[Color[\"Red\"] = 100] = \"Red\";\n    Color[Color[\"Green\"] = 122] = \"Green\";\n    Color[Color[\"Blue\"] = 4] = \"Blue\";\n})(Color || (Color = {}));\nvar c = Color.Green;\nvar c1 = Color[4];\nconsole.log(c);\n// get key(label) of value\nconsole.log(c1);\nvar firstTodo = {\n    id: 'uuid-first-todo',\n    description: 'This is the first todo ticket',\n    status: false,\n};\nfunction printTodo(todo) {\n    console.log(\"firstTodo with id: \" + todo.id + \", and description: \" + todo.description + \".\");\n}\nprintTodo(firstTodo);\n//--------------------------------------------OOP------------------------------------------\n// class inheritent\nvar Character = /** @class */ (function () {\n    function Character(id, name, email, phone) {\n        this.id = id;\n        this.name = name;\n        this.email = email;\n        this.phone = phone;\n    }\n    Character.prototype.getName = function () {\n        return this.name;\n    };\n    Character.prototype.getEmail = function () {\n        return this.email;\n    };\n    Character.prototype.getPhone = function () {\n        return this.phone;\n    };\n    return Character;\n}());\nvar Jedi = /** @class */ (function (_super) {\n    __extends(Jedi, _super);\n    function Jedi(id, name, email, phone, jedi) {\n        var _this = _super.call(this, id, name, email, phone) || this;\n        _this.jedi = jedi;\n        return _this;\n    }\n    Jedi.prototype.isJedi = function () {\n        return this.jedi;\n    };\n    return Jedi;\n}(Character));\nvar NewCharacter = new Character('firstUser', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203');\nvar newJedi = new Jedi('uuid-2', 'Yoda', 'yo.da@starwar.com', '012222', true);\nconsole.log(NewCharacter.getName());\nconsole.log(newJedi.getEmail());\n// another way to declare class (shorter constructor)\nvar shortCharacter = /** @class */ (function () {\n    function shortCharacter(id, name, email, phone) {\n        this.id = id;\n        this.name = name;\n        this.email = email;\n        this.phone = phone;\n    }\n    shortCharacter.prototype.getName = function () {\n        return this.name;\n    };\n    shortCharacter.prototype.getEmail = function () {\n        return this.email;\n    };\n    shortCharacter.prototype.getPhone = function () {\n        return this.phone;\n    };\n    return shortCharacter;\n}());\nvar BigBangCharacter = /** @class */ (function (_super) {\n    __extends(BigBangCharacter, _super);\n    function BigBangCharacter(id, name, email, phone, season) {\n        var _this = _super.call(this, id, name, email, phone) || this;\n        _this.season = season;\n        return _this;\n    }\n    BigBangCharacter.prototype.getSeason = function () {\n        return this.season;\n    };\n    return BigBangCharacter;\n}(shortCharacter));\nvar Seldon = new BigBangCharacter('1', 'Sheldon Cooper', 'sheldon.cooper@bigbang.com', '12443453423', 1);\nvar myArray;\nmyArray = ['Bob', 'Fred'];\nvar myStr = myArray[0];\nmyStr;\nvar exampleData = {\n    city: 'Helsinki',\n    date: '09/01/2021',\n    icon: 'http://openweathermap.org/img/wn/02d@2x.png',\n    temperature: 16.9,\n    description: 'few clouds',\n    feels_like: 16.34,\n    max_temperature: 18.39,\n    min_temperature: 15.55,\n    visibility: 10000,\n    isSuitableForOutdoorRun: function () {\n        return this.min_temperature < -20;\n    },\n};\n\n\n//# sourceURL=webpack://typescript-playground/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;