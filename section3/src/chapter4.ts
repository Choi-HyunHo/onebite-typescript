// 합집합 타입 - Union 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

// 유니온 타입으로 배열 정의
let arr: (number | string | boolean)[] = [1, "hello", true];

// 유니온과 객체 타입

type Dog = {
	name: string;
	color: string;
};

type Person = {
	name: string;
	language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
	// ✅
	name: "",
	color: "",
};

let union2: Union1 = {
	// ✅
	name: "",
	language: "",
};

let union3: Union1 = {
	// ✅
	name: "",
	color: "",
	language: "",
};

let union4: Union1 = {
	// ❌
	name: "",
};

// Intersection
type Dog = {
	name: string;
	color: string;
};

type Person = {
	name: string;
	language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
	name: "",
	color: "",
	language: "",
};
