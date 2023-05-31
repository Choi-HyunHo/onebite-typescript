// 인터페이스 선언 합침
interface Person {
	name: string;
}

interface Person {
	age: number;
}

const person: Person = {
	name: "hoho",
	age: 27,
};

// 주의할 점
interface Person {
	name: string;
}

interface Person {
	// 동일한 이름의 인터페이스들이 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의한다면 오류가 발생
	name: number; // ❌
	age: number;
}
