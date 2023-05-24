// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
	ADMIN, // 0 자동 할당
	USER, // 1 자동 할당
	GUEST, // 2 자동 할당
}

const user1 = {
	name: "사과",
	role: Role.ADMIN, //관리자
};

const user2 = {
	name: "바나나",
	role: Role.USER, // 회원
};

const user3 = {
	name: "멜론",
	role: Role.GUEST, // 게스트
};

// 할당
enum Role {
	ADMIN = 10,
	USER, // 11 자동 할당
	GUEST, // 12 자동 할당
}

const user1 = {
	name: "사과",
	role: Role.ADMIN, //관리자
};

const user2 = {
	name: "바나나",
	role: Role.USER, // 회원
};

const user3 = {
	name: "멜론",
	role: Role.GUEST, // 게스트
};

// 문자열 Enum
enum Role {
	ADMIN,
	USER,
	GUEST,
}

enum Language {
	korean = "ko",
	english = "en",
}

const user = {
	name: "hyunho",
	role: Role.ADMIN, // 0
	language: Language.korean, // "ko"
};
