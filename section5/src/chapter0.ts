// 인터페이스 : 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법입니다.

interface Person {
	name: string;
	age: number;
}

const person: Person = {
	name: "hoho",
	age: 27,
};

// 선택적 프로퍼티
interface Person {
	name: string;
	age?: number;
}

const person: Person = {
	name: "hoho",
	// age: 27,
};

// 읽기 전용

interface Person {
	readonly name: string;
	age?: number;
}

const person: Person = {
	name: "hoho",
	// age: 27,
};

person.name = "홍길동"; // ❌

// 메서드 타입 정의
interface Person {
	readonly name: string;
	age?: number;
	sayHi: () => void;
}

// 호출 시그니처로 메서드 정의
interface Person {
	readonly name: string;
	age?: number;
	sayHi(): void;
}

// 메서드 오버로딩
interface Person {
	readonly name: string;
	age?: number;
	sayHi: () => void;
	sayHi: (a: number, b: number) => void; // ❌
}

interface Person {
	readonly name: string;
	age?: number;
	sayHi(): void;
	sayHi(a: number): void;
	sayHi(a: number, b: number): void;
}

// 하이브리드 타입
interface Func2 {
	(a: number): string;
	b: boolean;
}

const func: Func2 = (a) => "hello";
func.b = true;

// 주의 !
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person & string = {
	name: "hoho",
	age: 27,
};
