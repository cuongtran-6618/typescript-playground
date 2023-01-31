/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Testing the language features
var fruits = {
    apple: ['short', ' long yellow', 'chilla'],
};
var user = ['uuid-1', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203'];
var user1 = ['uuid-1', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203'];
var getUserInfo = function (user) {
    user.map(function (attributeOfUser) {
        console.log(attributeOfUser);
    });
};
function getUserFullName(user) {
    return user[1];
}
console.log(getUserFullName(user));
//---------------------------------Enumn---------------------------------
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
var firstTodo = {
    id: 'uuid-first-todo',
    description: 'This is the first todo ticket',
    status: false,
};
function printTodo(todo) {
    console.log("firstTodo with id: ".concat(todo.id, ", and description: ").concat(todo.description, "."));
}
printTodo(firstTodo);
var Character = /** @class */ (function () {
    function Character(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    Character.prototype.getSpecialPower = function () {
        return { power: 'rich like batman or ironman' };
    };
    Character.prototype.getFullInformation = function () {
        return "Character ".concat(this.name, " has an email as ").concat(this.email, " and telephone number is ").concat(this.phone);
    };
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
var NewCharacter = new Character('firstUser', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203');
var newJedi = new Jedi('uuid-2', 'Yoda', 'yo.da@starwar.com', '012222', true);
console.log(NewCharacter.getName());
console.log(newJedi.getEmail());
console.log(newJedi.getFullInformation());
console.log(newJedi.getSpecialPower());
// another way to declare class (shorter constructor)
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
var BigBangCharacter = /** @class */ (function (_super) {
    __extends(BigBangCharacter, _super);
    function BigBangCharacter(id, name, email, phone, season) {
        var _this = _super.call(this, id, name, email, phone) || this;
        _this.season = season;
        return _this;
    }
    BigBangCharacter.prototype.getSeason = function () {
        return this.season;
    };
    return BigBangCharacter;
}(shortCharacter));
var Seldon = new BigBangCharacter('1', 'Sheldon Cooper', 'sheldon.cooper@bigbang.com', '12443453423', 1);
Seldon.getSeason();
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
myStr;
var exampleData = {
    city: 'Helsinki',
    date: '09/01/2021',
    icon: 'http://openweathermap.org/img/wn/02d@2x.png',
    temperature: 16.9,
    description: 'few clouds',
    feels_like: 16.34,
    max_temperature: 18.39,
    min_temperature: 15.55,
    visibility: 10000,
    isSuitableForOutdoorRun: function () {
        return this.min_temperature < -20;
    },
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVRWxNRjtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1wbGF5Z3JvdW5kLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtcGxheWdyb3VuZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3R5cGVzY3JpcHQtcGxheWdyb3VuZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1wbGF5Z3JvdW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUZXN0aW5nIHRoZSBsYW5ndWFnZSBmZWF0dXJlc1xyXG5jb25zdCBmcnVpdHMgPSB7XHJcbiAgYXBwbGU6IFsnc2hvcnQnLCAnIGxvbmcgeWVsbG93JywgJ2NoaWxsYSddLFxyXG59O1xyXG5cclxubGV0IHVzZXI6IEFycmF5PHN0cmluZz4gPSBbJ3V1aWQtMScsICdMdWtlIFNreXdhbGtlcicsICdsdWtlLnNreXdhbGtlckBzdGFyd2FyLmNvbScsICcwMTIzMzkyMDMnXTtcclxuXHJcbmxldCB1c2VyMTogc3RyaW5nW10gPSBbJ3V1aWQtMScsICdMdWtlIFNreXdhbGtlcicsICdsdWtlLnNreXdhbGtlckBzdGFyd2FyLmNvbScsICcwMTIzMzkyMDMnXTtcclxuXHJcbmNvbnN0IGdldFVzZXJJbmZvID0gKHVzZXI6IEFycmF5PHN0cmluZz4pOiB2b2lkID0+IHtcclxuICB1c2VyLm1hcCgoYXR0cmlidXRlT2ZVc2VyOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGF0dHJpYnV0ZU9mVXNlcik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyRnVsbE5hbWUodXNlcjogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHVzZXJbMV07XHJcbn1cclxuY29uc29sZS5sb2coZ2V0VXNlckZ1bGxOYW1lKHVzZXIpKTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRW51bW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZW51bSBDb2xvciB7XHJcbiAgUmVkID0gMTAwLFxyXG4gIEdyZWVuID0gMTIyLFxyXG4gIEJsdWUgPSA0LFxyXG59XHJcblxyXG5sZXQgYzogQ29sb3IgPSBDb2xvci5HcmVlbjtcclxubGV0IGMxOiBzdHJpbmcgPSBDb2xvcls0XTtcclxuY29uc29sZS5sb2coYyk7XHJcbi8vIGdldCBrZXkobGFiZWwpIG9mIHZhbHVlXHJcbmNvbnNvbGUubG9nKGMxKTtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY3JlYXRlIG15IG93biB0eXBlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmludGVyZmFjZSBUb2RvIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBib29sZWFuO1xyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55OyAvLyBUb2RvIGNhbiBoYXMgb3RoZXIgcHJvcGVydHkgd2l0aCB0eXBlIGFzIGFueVxyXG59XHJcblxyXG5jb25zdCBmaXJzdFRvZG8gPSB7XHJcbiAgaWQ6ICd1dWlkLWZpcnN0LXRvZG8nLFxyXG4gIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgZmlyc3QgdG9kbyB0aWNrZXQnLFxyXG4gIHN0YXR1czogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBwcmludFRvZG8odG9kbzogVG9kbyk6IHZvaWQge1xyXG4gIGNvbnNvbGUubG9nKGBmaXJzdFRvZG8gd2l0aCBpZDogJHt0b2RvLmlkfSwgYW5kIGRlc2NyaXB0aW9uOiAke3RvZG8uZGVzY3JpcHRpb259LmApO1xyXG59XHJcblxyXG5wcmludFRvZG8oZmlyc3RUb2RvKTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1PT1AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIGNsYXNzIGluaGVyaXRlbnRcclxuaW50ZXJmYWNlIENoYXJhY3RlckludGVyZmFjZTxUIGV4dGVuZHMgb2JqZWN0PiB7XHJcbiAgZ2V0TmFtZSgpOiBzdHJpbmc7XHJcbiAgZ2V0RW1haWwoKTogc3RyaW5nO1xyXG4gIGdldFBob25lKCk6IHN0cmluZztcclxuICBnZXRGdWxsSW5mb3JtYXRpb24oKTogc3RyaW5nO1xyXG4gIGdldFNwZWNpYWxQb3dlcigpOiBUO1xyXG59XHJcblxyXG5jbGFzcyBDaGFyYWN0ZXIgaW1wbGVtZW50cyBDaGFyYWN0ZXJJbnRlcmZhY2U8eyBwb3dlcjogc3RyaW5nIH0+IHtcclxuICByZWFkb25seSBpZDogc3RyaW5nOyAvLyByZWFkb25seSB3aWxsIHByZXZlbnQgcHJvZ3JhbSBjaGFuZ2UgaWQgbGF0ZXIgYWZ0ZXIgaXQgd2FzIGluaXRpYWxcclxuICBwcml2YXRlIG5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIHBob25lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBlbWFpbDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBob25lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmVtYWlsID0gZW1haWw7XHJcbiAgICB0aGlzLnBob25lID0gcGhvbmU7XHJcbiAgfVxyXG4gIGdldFNwZWNpYWxQb3dlcigpOiB7XHJcbiAgICBwb3dlcjogc3RyaW5nO1xyXG4gIH0ge1xyXG4gICAgcmV0dXJuIHsgcG93ZXI6ICdyaWNoIGxpa2UgYmF0bWFuIG9yIGlyb25tYW4nIH07XHJcbiAgfVxyXG5cclxuICBnZXRGdWxsSW5mb3JtYXRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgQ2hhcmFjdGVyICR7dGhpcy5uYW1lfSBoYXMgYW4gZW1haWwgYXMgJHt0aGlzLmVtYWlsfSBhbmQgdGVsZXBob25lIG51bWJlciBpcyAke3RoaXMucGhvbmV9YDtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW1haWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbWFpbDtcclxuICB9XHJcblxyXG4gIGdldFBob25lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGhvbmU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBKZWRpIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuICBwcml2YXRlIGplZGk6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGhvbmU6IHN0cmluZywgamVkaTogYm9vbGVhbikge1xyXG4gICAgc3VwZXIoaWQsIG5hbWUsIGVtYWlsLCBwaG9uZSk7XHJcbiAgICB0aGlzLmplZGkgPSBqZWRpO1xyXG4gIH1cclxuXHJcbiAgaXNKZWRpKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuamVkaTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IE5ld0NoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoJ2ZpcnN0VXNlcicsICdMdWtlIFNreXdhbGtlcicsICdsdWtlLnNreXdhbGtlckBzdGFyd2FyLmNvbScsICcwMTIzMzkyMDMnKTtcclxuXHJcbmNvbnN0IG5ld0plZGk6IENoYXJhY3RlciA9IG5ldyBKZWRpKCd1dWlkLTInLCAnWW9kYScsICd5by5kYUBzdGFyd2FyLmNvbScsICcwMTIyMjInLCB0cnVlKTtcclxuY29uc29sZS5sb2coTmV3Q2hhcmFjdGVyLmdldE5hbWUoKSk7XHJcbmNvbnNvbGUubG9nKG5ld0plZGkuZ2V0RW1haWwoKSk7XHJcbmNvbnNvbGUubG9nKG5ld0plZGkuZ2V0RnVsbEluZm9ybWF0aW9uKCkpO1xyXG5jb25zb2xlLmxvZyhuZXdKZWRpLmdldFNwZWNpYWxQb3dlcigpKTtcclxuXHJcbi8vIGFub3RoZXIgd2F5IHRvIGRlY2xhcmUgY2xhc3MgKHNob3J0ZXIgY29uc3RydWN0b3IpXHJcbmNsYXNzIHNob3J0Q2hhcmFjdGVyIHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBpZDogc3RyaW5nLCBwcml2YXRlIG5hbWU/OiBzdHJpbmcsIHByaXZhdGUgZW1haWw/OiBzdHJpbmcsIHByaXZhdGUgcGhvbmU/OiBzdHJpbmcpIHt9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW1haWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbWFpbDtcclxuICB9XHJcblxyXG4gIGdldFBob25lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGhvbmU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBCaWdCYW5nQ2hhcmFjdGVyIGV4dGVuZHMgc2hvcnRDaGFyYWN0ZXIge1xyXG4gIHByaXZhdGUgc2Vhc29uPzogbnVtYmVyIHwgc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBlbWFpbD86IHN0cmluZywgcGhvbmU/OiBzdHJpbmcsIHNlYXNvbj86IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgc3VwZXIoaWQsIG5hbWUsIGVtYWlsLCBwaG9uZSk7XHJcbiAgICB0aGlzLnNlYXNvbiA9IHNlYXNvbjtcclxuICB9XHJcblxyXG4gIGdldFNlYXNvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnNlYXNvbjtcclxuICB9XHJcbn1cclxuXHJcbmxldCBTZWxkb24gPSBuZXcgQmlnQmFuZ0NoYXJhY3RlcignMScsICdTaGVsZG9uIENvb3BlcicsICdzaGVsZG9uLmNvb3BlckBiaWdiYW5nLmNvbScsICcxMjQ0MzQ1MzQyMycsIDEpO1xyXG5TZWxkb24uZ2V0U2Vhc29uKCk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbnRlcmZhY2UgU3RyaW5nQXJyYXkge1xyXG4gIFtpbmRleDogbnVtYmVyXTogc3RyaW5nO1xyXG59XHJcblxyXG5sZXQgbXlBcnJheTogU3RyaW5nQXJyYXk7XHJcbm15QXJyYXkgPSBbJ0JvYicsICdGcmVkJ107XHJcblxyXG5sZXQgbXlTdHI6IHN0cmluZyA9IG15QXJyYXlbMF07XHJcbm15U3RyO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmludGVyZmFjZSBXZWF0aGVySW50ZXJmYWNlIHtcclxuICAvLyBwcm9wZXJ0eSBtYXBwaW5nXHJcbiAgY2l0eTogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgdGVtcGVyYXR1cmU6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGZlZWxzX2xpa2U6IG51bWJlcjtcclxuICBtYXhfdGVtcGVyYXR1cmU6IG51bWJlcjtcclxuICBtaW5fdGVtcGVyYXR1cmU6IG51bWJlcjtcclxuICB2aXNpYmlsaXR5OiBudW1iZXI7XHJcbiAgLy8gZnVuY3Rpb25cclxuICBpc1N1aXRhYmxlRm9yT3V0ZG9vclJ1bigpOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBleGFtcGxlRGF0YTogV2VhdGhlckludGVyZmFjZSA9IHtcclxuICBjaXR5OiAnSGVsc2lua2knLFxyXG4gIGRhdGU6ICcwOS8wMS8yMDIxJyxcclxuICBpY29uOiAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMDJkQDJ4LnBuZycsXHJcbiAgdGVtcGVyYXR1cmU6IDE2LjksXHJcbiAgZGVzY3JpcHRpb246ICdmZXcgY2xvdWRzJyxcclxuICBmZWVsc19saWtlOiAxNi4zNCxcclxuICBtYXhfdGVtcGVyYXR1cmU6IDE4LjM5LFxyXG4gIG1pbl90ZW1wZXJhdHVyZTogMTUuNTUsXHJcbiAgdmlzaWJpbGl0eTogMTAwMDAsXHJcbiAgaXNTdWl0YWJsZUZvck91dGRvb3JSdW46IGZ1bmN0aW9uICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1pbl90ZW1wZXJhdHVyZSA8IC0yMDtcclxuICB9LFxyXG59O1xyXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2luZGV4LnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=