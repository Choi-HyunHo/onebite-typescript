// 함수 타입 표현식

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 편리하게 사용 가능
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 한 번에 사용

type Operation2 = {
	(a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

const add: (a: number, b: number) => number = (a, b) => a + b;

type Operation2 = {
	(a: number, b: number): number;
	name: string;
};

const add2: Operation2 = (a, b) => a + b;

add2(1, 2);
add2.name;
