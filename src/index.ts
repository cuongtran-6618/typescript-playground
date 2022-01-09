console.log('test');

// Testing the language features
const fruits = {
  apple: ['short', ' long yellow', 'chilla'],
};

let user: Array<string> = ['uuid-1', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203'];

let user1: string[] = ['uuid-1', 'Luke Skywalker', 'luke.skywalker@starwar.com', '012339203'];

const getUserInfo = (user: Array<string>): void => {
  user.map((attributeOfUser: string) => {
    console.log(attributeOfUser);
  });
};

function getUserFullName(user: Array<string>): string {
  return user[1];
}
console.log(getUserFullName(user));

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
interface Todo {
  id: string;
  description: string;
  status: boolean;
  [propName: string]: any; // Todo can has other property with type as any
}

const firstTodo = {
  id: 'uuid-first-todo',
  description: 'This is the first todo ticket',
  status: false,
};

function printTodo(todo: Todo): void {
  console.log(`firstTodo with id: ${todo.id}, and description: ${todo.description}.`);
}

printTodo(firstTodo);

//--------------------------------------------OOP------------------------------------------

// class inheritent
class Character {
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
