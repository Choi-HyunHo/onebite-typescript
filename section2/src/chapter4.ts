// 타입 별칭

type User = {
	id: number;
	name: string;
	nickname: string;
	birth: string;
	bio: string;
	location: string;
};

let user: User = {
	id: 1,
	name: "hyunho",
	nickname: "winterlood",
	birth: "1997.08.15",
	bio: "안녕하세요",
	location: "서울",
};

let user2: User = {
	id: 2,
	name: "홍길동",
	nickname: "winterlood",
	birth: "1997.01.07",
	bio: "안녕하세요",
	location: "부천시",
};

// 인덱스 시그니처

// type CountryCodes = {
// 	Korea: string;
// 	UnitedState: string;
// 	UnitedKingdom: string;
// 	// (... 약 100개의 국가)
// 	Brazil: string;
// };

// let countryCodes: CountryCodes = {
// 	Korea: "ko",
// 	UnitedState: "us",
// 	UnitedKingdom: "uk",
// 	// (... 약 100개의 국가)
// 	Brazil: "bz",
// };

type CountryCodes = {
	[key: string]: string;
};

let countryCodes: CountryCodes = {
	Korea: "ko",
	UnitedState: "us",
	UnitedKingdom: "uk",
	// (... 약 100개의 국가)
	Brazil: "bz",
};

// 숫자로 보관하는 객체
type CountryNumberCodes = {
	[key: string]: number;
};

// 반드시 포함해야 하는 프로퍼티
type CountryNumberCodes = {
	[key: string]: number;
	Korea: number;
};

// 오류
type CountryNumberCodes = {
	[key: string]: number;
	Korea: string; // 오류!
};
