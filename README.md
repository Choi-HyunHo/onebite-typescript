# TypeScript 실행 순서

## 1. Node.js 패키지 초기화

path : onebite-typescript/section1

```
 npm init
```

<br>

## 2. @types/node 설치

-   Node.js 내장 기능들의 타입 정보를 담고있는 @types/node 라는 패키지를 설치해 주어야 합니다.
-   @types/node 라이브러리는 Node.js가 제공하는 기본 기능(내장 함수, 클래스 등)에 대한 타입 정보를 가지고 있습니다.
-   만약 이 라이브러리를 설치하지 않으면 Node.js가 제공하는 console 등의 기본 기능(내장 함수 등)들의 타입이 선언되지 않아서 <br> 타입스크립트의 컴파일 과정에서 타입 검사가 실패하여 오류가 발생할 수 있습니다.

```
npm i @types/node
```

<br>

## 3. 타입스크립트 컴파일러 설치

타입스크립트는 컴파일러에 의해서 자바스크립트로 변환한 다음에 실행 합니다.

-   그래서 자바스크립트를 실행하기 위해 Node.js를 설치하는 것 처럼 <br> 타입스크립트를 컴파일 하기 위해서는 타입스크립트 패키지를 설치해 주어야 합니다.

<br>

windows (오류 발생 시 관리자 권한 실행)

```
npm i -g typescript
```

<br>

macOS

```
sudo npm i -g typescript
```

<br>

정상적으로 확인하기 위한 버전 확인

```
tss -v
```

<br>

## 4. 타입스크립트 실행

<br>

### 4-1. 타입스크립트 파일 만들기

패키지 루트 아래에 src 폴더를 생성한 다음 `index.ts` 파일을 생성하고 다음과 같이 작성합니다.

-   참고로 타입스크립트 파일의 확장자는 ts 입니다.

```
console.log("Hello TypeScript");
const a: number = 1;
```

<br>

### 4-2. tsc로 컴파일하고 실행

타입스크립트 컴파일러를 이용해 이 타입스크립트 코드를 컴파일 합니다. 터미널에 다음 명령어를 입력합니다.

-   `tsc 파일명` 은 특정 파일을 컴파일 하도록 타입스크립트 컴파일러에게 지시하는 명령어입니다.
-   위 명령어를 입력하면 src/index.ts 파일을 타입스크립트 컴파일러가 컴파일 합니다.

```
tsc src/index.ts
```

<br>

컴파일이 완료되면 자바스크립트 파일 `src/index.js` 이 생성됩니다. 파일을 열어 컴파일 된 자바스크립트 코드를 확인합니다.

```
console.log("Hello TypeScript");
var a = 1;
```

<br>

이렇게 컴파일 된 자바스크립트 코드는 `node`를 이용해 실행합니다. 다음 명령어를 터미널에 입력해 src/index.js를 실행합니다.

```
node src/index.js
> Hello Typescript
```

<br>

## 참고. ts-node

위의 과정을 보면 tsc 그리고 node 2번의 명령어를 사용해 타입스크립트 코드를 실행 했습니다.

-   이번에는 명령어 한번으로 타입스크립트 코드를 바로 실행시켜주는 도구 ts-node에 대해 살펴보겠습니다.

<br>

windows (오류 발생 시 관리자 권한 실행)

```
npm i -g ts-node
```

<br>

macOS

```
sudo npm i -g ts-node
```

<br>

정상적으로 설치 확인

```
ts-node -v
```

<br>

정상적으로 설치가 되었다면 `ts-node` 를 이용해 타입스크립트 파일을 실행

```
ts-node src/index.ts
```
