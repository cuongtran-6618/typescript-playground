// Testing the language features
const fruits = {
	apple: ["short", " long yellow", "chilla"],
};

let user: Array<string> = [
	"uuid-1",
	"Luke Skywalker",
	"luke.skywalker@starwar.com",
	"012339203",
];

let user1: string[] = [
	"uuid-1",
	"Luke Skywalker",
	"luke.skywalker@starwar.com",
	"012339203",
];

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

const getUserInfo = (user: Array<string>): void => {
	user.map((attributeOfUser: string) => {
		console.log(attributeOfUser);
	});
};

function getUserFullName(user: Array<string>): string {
	return user[1];
}
console.log(getUserFullName(user));

//---------------------------------------------------------------------------------------------------

// create my own type
interface Todo {
	id: String;
	decription: String;
	status: Boolean;
}

const firstTodo = {
	id: "uuid-first-todo",
	decription: "This is the first todo ticket",
	status: false,
};

function printTodo(todo: Todo): void {
	console.log(
		`firstTodo with id: ${todo.id}, and description: ${todo.decription}.`
	);
}

printTodo(firstTodo);

//--------------------------------------------OOP-------------------------------------------------------
class Character {
	private id: string;
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

	constructor(
		id: string,
		name: string,
		email: string,
		phone: string,
		jedi: boolean
	) {
		super(id, name, email, phone);
		this.jedi = jedi;
	}

	isJedi() {
		return this.jedi;
	}
}

const NewCharacter = new Character(
	"firstUser",
	"Luke Skywalker",
	"luke.skywalker@starwar.com",
	"012339203"
);

class shortCharacter {
	constructor(
		private id: string,
		private name?: string,
		private email?: string,
		private phone?: string
	) {}

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

console.log(NewCharacter.getName());

const newJedi: Character = new Jedi(
	"uuid-2",
	"Yoda",
	"yo.da@starwar.com",
	"012222",
	true
);

console.log(newJedi.getEmail());
