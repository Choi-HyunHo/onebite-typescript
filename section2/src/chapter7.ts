function func1(): string {
	return "hello";
}

function func2(): void {
	console.log("hello");
}

// 무한 루프이기 때문에 어떠한 값도 반환 할 수 없다.
function func3(): never {
	while (true) {}
}

// 의도적으로 오류를 발생시키는 함수
function func4(): never {
	throw new Error();
}


let anyVar: any;
(...)

let a: never;
a = 1;
a = null;
a = undefined;
a = anyVar;