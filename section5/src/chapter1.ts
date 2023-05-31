// 인터페이스 확장
interface Animal {
	name: string;
	color: string;
}

interface Dog extends Animal {
	breed: string;
}

interface Cat extends Animal {
	isScratch: boolean;
}

interface Chicken extends Animal {
	isFly: boolean;
}

// 프로퍼티 재정의
interface Animal {
	name: string;
	color: string;
}

interface Dog extends Animal {
	name: "doldol"; // 타입 재 정의
	breed: string;
}

// 잘못된 예시
interface Animal {
	name: string;
	color: string;
}

interface Dog extends Animal {
	name: number; // ❌
	breed: string;
}

// 타입 별칭 확장
type Animal = {
	name: string;
	color: string;
};

interface Dog extends Animal {
	breed: string;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
	name: "",
	color: "",
	breed: "",
	isScratch: true,
};
