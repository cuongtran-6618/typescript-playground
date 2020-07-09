var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Testing the language features
var fruits = {
    apple: ["short", " long yellow", "chilla"]
};
var user = [
    "uuid-1",
    "Luke Skywalker",
    "luke.skywalker@starwar.com",
    "012339203",
];
var user1 = [
    "uuid-1",
    "Luke Skywalker",
    "luke.skywalker@starwar.com",
    "012339203",
];
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Green"] = 122] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var c1 = Color[4];
console.log(c);
// get key(label) of value
console.log(c1);
var getUserInfo = function (user) {
    user.map(function (attributeOfUser) {
        console.log(attributeOfUser);
    });
};
function getUserFullName(user) {
    return user[1];
}
console.log(getUserFullName(user));
var firstTodo = {
    id: "uuid-first-todo",
    decription: "This is the first todo ticket",
    status: false
};
function printTodo(todo) {
    console.log("firstTodo with id: " + todo.id + ", and description: " + todo.decription + ".");
}
printTodo(firstTodo);
//--------------------------------------------OOP-------------------------------------------------------
var Character = /** @class */ (function () {
    function Character(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    Character.prototype.getName = function () {
        return this.name;
    };
    Character.prototype.getEmail = function () {
        return this.email;
    };
    Character.prototype.getPhone = function () {
        return this.phone;
    };
    return Character;
}());
var Jedi = /** @class */ (function (_super) {
    __extends(Jedi, _super);
    function Jedi(id, name, email, phone, jedi) {
        var _this = _super.call(this, id, name, email, phone) || this;
        _this.jedi = jedi;
        return _this;
    }
    Jedi.prototype.isJedi = function () {
        return this.jedi;
    };
    return Jedi;
}(Character));
var NewCharacter = new Character("firstUser", "Luke Skywalker", "luke.skywalker@starwar.com", "012339203");
var shortCharacter = /** @class */ (function () {
    function shortCharacter(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    shortCharacter.prototype.getName = function () {
        return this.name;
    };
    shortCharacter.prototype.getEmail = function () {
        return this.email;
    };
    shortCharacter.prototype.getPhone = function () {
        return this.phone;
    };
    return shortCharacter;
}());
console.log(NewCharacter.getName());
var newJedi = new Jedi("uuid-2", "Yoda", "yo.da@starwar.com", "012222", true);
console.log(newJedi.getEmail());
