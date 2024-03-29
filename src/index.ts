import getUserInfo from './array';
import printTodo from './printTodo';

let user: Array<string> = ['uuid-1', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203'];

getUserInfo(user);
//---------------------------------Enumn---------------------------------
enum Color {
  Red = 100,
  Green = 122,
  Blue = 4,
}

let c: Color = Color.Green;
let c1: string = Color[4];
console.log(c);
// get key(label) of value
console.log(c1);
// ---------------------------------create my own type---------------------------------

const firstTodo = {
  id: 'uuid-first-todo',
  description: 'This is the first todo ticket',
  status: false,
};

printTodo(firstTodo);

//--------------------------------------------OOP------------------------------------------

// class inheritent
interface CharacterInterface<T extends object> {
  getName(): string;
  getEmail(): string;
  getPhone(): string;
  getFullInformation(): string;
  getSpecialPower(): T;
}

class Character implements CharacterInterface<{ power: string }> {
  readonly id: string; // readonly will prevent program change id later after it was initial
  private name: string;
  private phone: string;
  private email: string;

  constructor(id: string, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  getSpecialPower(): {
    power: string;
  } {
    return { power: 'rich like batman or ironman' };
  }

  getFullInformation(): string {
    return `Character ${this.name} has an email as ${this.email} and telephone number is ${this.phone}`;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPhone() {
    return this.phone;
  }
}

class Jedi extends Character {
  private jedi: boolean;

  constructor(id: string, name: string, email: string, phone: string, jedi: boolean) {
    super(id, name, email, phone);
    this.jedi = jedi;
  }

  isJedi() {
    return this.jedi;
  }
}

const NewCharacter = new Character('firstUser', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203');

const newJedi: Character = new Jedi('uuid-2', 'Yoda', 'yo.da@starwar.com', '012222', true);
console.log(NewCharacter.getName());
console.log(newJedi.getEmail());
console.log(newJedi.getFullInformation());
console.log(newJedi.getSpecialPower());

// another way to declare class (shorter constructor)
class shortCharacter {
  constructor(readonly id: string, private name?: string, private email?: string, private phone?: string) {}

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPhone() {
    return this.phone;
  }
}

class BigBangCharacter extends shortCharacter {
  private season?: number | string;

  constructor(id: string, name?: string, email?: string, phone?: string, season?: number | string) {
    super(id, name, email, phone);
    this.season = season;
  }

  getSeason() {
    return this.season;
  }
}

let Seldon = new BigBangCharacter('1', 'Sheldon Cooper', 'sheldon.cooper@bigbang.com', '12443453423', 1);
Seldon.getSeason();

//--------------------------------------

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];
myStr;

//------------------------

interface WeatherInterface {
  // property mapping
  city: string;
  date: string;
  icon: string;
  temperature: number;
  description: string;
  feels_like: number;
  max_temperature: number;
  min_temperature: number;
  visibility: number;
  // function
  isSuitableForOutdoorRun(): boolean;
}

const exampleData: WeatherInterface = {
  city: 'Helsinki',
  date: '09/01/2021',
  icon: 'http://openweathermap.org/img/wn/02d@2x.png',
  temperature: 16.9,
  description: 'few clouds',
  feels_like: 16.34,
  max_temperature: 18.39,
  min_temperature: 15.55,
  visibility: 10000,
  isSuitableForOutdoorRun: function (): boolean {
    return this.min_temperature < -20;
  },
};
