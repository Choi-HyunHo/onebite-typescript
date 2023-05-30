// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
function func(a, b) {
	return a + b;
}

// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과 값을 반환 하는지 확인
function func(a: number, b: number): number {
	return a + b;
}

function func(a: number, b: number) {
	return a + b;
}

// 매개변수 기본 값 설정하기

function introduce(name = "hoho") {
	console.log(`name : ${name}`);
}

// 당연히 기본값과 다른 타입으로 매개변수의 타입을 정의하면 오류가 발생합니다.

function introduce(name: number = "hoho") {
	console.log(`name : ${name}`);
}

// 당연히 기본값과 다른 타입의 값을 인수로 전달해도 오류가 발생합니다.
function introduce(name = "hoho") {
	console.log(`name : ${name}`);
}
// introduce(1); // 오류

// 선택적 매개변수

function introduce(name = "hoho", tall?: number) {
	console.log(`name : ${name}`);
	console.log(`tall : ${tall}`);
}

introduce("hoho", 181);
introduce("hoho");

// 선택적 매개변수 타입 좁히기
function introduce(name = "hoho", tall?: number) {
	console.log(`name : ${name}`);
	if (typeof tall === "number") {
		console.log(`tall : ${tall}`);
	}
}

// 선택적 매개변수는 필수 매개변수보다 앞에 올 수 없다.
function introduce(name = "hoho", tall?: number, age: number) {
	console.log(`name : ${name}`);
	if (typeof tall === "number") {
		console.log(`tall : ${tall}`);
	}
}

// 나머지 매개변수
function getSum(...rest: number[]) {
	let sum = 0;
	rest.forEach((it) => (sum += it));
	return sum;
}

// 매개변수 길이 고정
function getSum(...rest: [number, number, number]) {
	let sum = 0;
	rest.forEach((it) => (sum += it));
	return sum;
}

getSum(1, 2, 3); // ✅
getSum(1, 2, 3, 4); // ❌
