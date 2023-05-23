// 이 타입은 객체의 프로퍼티에 대한 정보를 전혀 가지고 있지 않습니다
// let user: object = {
// 	id: 1,
// 	name: "hyunho",
// };

// user.id;

// 올바른 예 - 객체 리터럴 타입
let user: {
	id: number;
	name: string;
} = {
	id: 1,
	name: "hyunho",
};

user.id;

// 선택적 프로퍼티
let user1: {
	id?: number; // 선택적 프로퍼티가 된 id
	name: string;
} = {
	id: 1,
	name: "hyunho",
};

user1 = {
	name: "홍길동",
};

// 타입이 다름
// let user: {
//     id?: number;
//     name: string;
//   } = {
//     id: 1,
//     name: "hyunho",
//   };

//   user = {
//     id: "id", // 오류 발생!
//     name: "홍길동",
//   };

// 일기 전용
let user3: {
	id?: number;
	readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
	id: 1,
	name: "hyunho",
};

user.name = "홍길동"; // 오류 발생
