let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

let c = {
	id: 1,
	name: "hyunho",
	profile: {
		nickname: "hoho",
	},
	urls: ["https://choi-hyunho.com/"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

let [one, two, three] = [1, "hello", true];

function func() {
	return "hello";
}
// 반환값이 string 타입으로 추론된다

// 기본 값
function func(message = "hello") {
	return "hello";
}

// 암묵적 any 추론
let d;
d = 10; // number
d.toFixed();

d = "hello"; // string
d.toUpperCase();
d.toFixed(); // 오류

// const 추론
const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론

// 최적 공통 타입
let arr = [1, "string"];
// (string | number)[] 타입으로 추론
