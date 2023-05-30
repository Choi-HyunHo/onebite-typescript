// 타입 좁히기 및 타입 가드
function func(value: number | string) {
	// value.toFixed(); // 오류
	// value.toUpperCase(); // 오류

	if (typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	}
}

function func(value: number | string | Date) {
	if (typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	} else if (typeof value === "object") {
		value;
		console.log(value.getTime()); // ✅
	}
}

function func(value: number | string | Date | null) {
	if (typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	} else if (typeof value === "object") {
		value;
		console.log(value.getTime()); // ❌
	}
}

// instanceof
function func(value: number | string | Date | null) {
	if (typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	} else if (value instanceof Date) {
		value;
		console.log(value.getTime());
	}
}

// in
type Person = {
	name: string;
	age: number;
};

function func(value: number | string | Date | null | Person) {
	if (typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	} else if (value instanceof Date) {
		console.log(value.getTime());
	} else if (value && "age" in value) {
		console.log(`${value.name}은 ${value.age}살 입니다`);
	}
}
