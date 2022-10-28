# 미션 - 온보딩

## 🔍 진행 방식

- 미션은 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항** 세 가지로 구성되어 있다.
- 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.

## 📮 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  - GitHub을 활용한 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고해
    제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원](https://apply.techcourse.co.kr) 사이트에 접속하여 프리코스 과제를 제출한다.
  - 자세한 방법은 [제출 가이드](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 참고
  - **Pull Request만 보내고 지원 플랫폼에서 과제를 제출하지 않으면 최종 제출하지 않은 것으로 처리되니 주의한다.**

## 🚨 과제 제출 전 체크 리스트 - 0점 방지

- 기능 구현을 모두 정상적으로 했더라도 **요구 사항에 명시된 출력값 형식을 지키지 않을 경우 0점으로 처리**한다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는지 확인한다.
- **테스트가 실패할 경우 0점으로 처리**되므로, 반드시 확인 후 제출한다.

### 테스트 실행 가이드

- 테스트 패키지 설치를 위해 `Node.js` 버전 `14` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
npm test
```

---

## 🚀 기능 요구 사항

아래의 7가지 기능 요구 사항을 모두 해결해야 한다.

1. [문제 1](docs/PROBLEM1.md)

   - 요구 기능

     - ~~pobi, crong으로 받는 페이지 정보가 적합한 정보인지 판단~~

       우선적으로 숫자가 작은 것을 왼쪽 페이지, 큰것을 오른쪽 페이지로 설정합니다.

       1. 오른쪽 페이지는 왼쪽 페이지보다 1 커야하며
       2. 왼쪽 페이지는 항상 홀수 여야하고
       3. 페이지는 항상 400보다 작거나 같아야하고
       4. 페이지는 항상 1보다 커야합니다.

     - ~~페이지를 가지고 최대 값 계산하기~~

       숫자를 문자로 변환하고 다시 `split`메소드를 통해 배열로 변환 합니다.

       그리고 `reduce` 메소드를 이용해서 모두 더한 값 혹은 모두 곲한 값을 계산하여 큰 값을 반환합니다.

2. [문제 2](docs/PROBLEM2.md)

   - 요구 기능
     - ~~do ... while 을 이용해 더 이상 제거할 수 있는 중복 문자가 있는지 체크~~
     - ~~중복 문자를 제거하는 함수 만들기~~
       1. Set 객체를 이용해 문자열이 가지는 알파벳 추출
       2. replace 메소드를 이용해서 각 문자열에서 중복되는 알파벳 제거
     - ~~정규 표현식 만드는 함수 만들기~~
       1. 알파벳을 입력 받습니다.
       2. 알파벳이 2개 이상 연속되어 있는 `substring`을 찾는 정규표현식을 리턴합니다.
   - 고민했던 부분

     효율과 가독성 부분에서 고민을 하였지만 효율적인 부분은 개선하여도 효과가 미미할 것 같아 가독성을 더 좋게 하는게 좋을 거 같다는 생각에 가독성이 좋은 코드를 작성하려고 노력하였습니다.

3. [문제 3](docs/PROBLEM3.md)

   - 요구 기능
     - ~~숫자를 순회하면서 각 숫자에 따른 손뼉횟수 더하기~~
       - 입력받은 숫자를 배열로 만들어서 reduce를 이용해 구현
     - ~~숫자를 받으면 손뼉 횟수 반환하는 함수 구현~~
       1. 숫자를 문자로 변환하여 정규식 `/[369]+/`로 몇개의 3 혹은 6 혹은 9 가 매치 되는지 체크
       2. 매치되는 문자열이 없으면 0, 매치되는 문자열은 문자열의 길이를 반환합니다.
   - 고민했던 부분

     for문을 이용하면 효율성을 높힐 수 있지만 가독성 면에서 배열을 만든 후 reduce를 사용하는 것이 좋을 것이라 판단 하였습니다.

4. [문제 4](docs/PROBLEM4.md)

   - 요구 기능
     - ~~배열을 순회 하면서 청개구리 사전을 변환하기~~
       - `split`을 이용해서 배열로 만들고`map`을 이용해서 배열을 재생성 후 `join`으로 합치기.
     - ~~어떤 알파벳을 인자로 받으면 청개수리 사전을 통해 변환된 알파벳 반환하는 함수 구현~~
       1. 정규표현식을 통해 알파벳인지 확인 후 알파벳이 아닐경우 그대로 반환
       2. 대문자인지 소문자인지 `isUpper`변수에 저장
       3. 대문자 소문자에 따라 청개구리 사전에 의해 아스키 코드 구하기
       4. 아스키 코드를 다시 알파벳으로 변환하여 반환.
   - 고민했던 부분

     삼항 연산자를 쓰는게 맞는지에 대한 고민을 하였습니다. 제가 느끼기에는 삼항 연산자가 확실히 가독성도 있고 어떤 기준 하에 어떤 로직을 선택하는지가 명확하다고 느끼지만 조금 길어지는 경향이 있다고 생각하여서 고민을 하였습니다.

5. [문제 5](docs/PROBLEM5.md)

   - 요구 기능

     - ~~map을 이용해서 돈 단위를 돌면서 필요한 수 반환~~
     - ~~map의 콜백 함수는 필요한 수를 반환하며 그 돈을 제한 나머지 돈 계산~~

   - 고민했던 부분

     map의 콜백함수 부분을 조금 깔끔하게 정리할 방법에 대해 고민하고 있지만 좋은 생각이 나질 않는 중입니다.

6. [문제 6](docs/PROBLEM6.md)

   - 요구 기능

     - ~~email validation 기능 함수 구현~~

     - ~~이미 저장된 이메일 체크 구현~~

     - ~~닉네임 비교 함수 구현~~

       - ~~정규 표현식을 위한 regString 만드는 함수 구현~~

         - ~~tagetNickname을 정규표현식화 하는 함수~~

           제이슨 -> (제이)?(이제)?(이슨)?

       - ~~filter를 이용해서 targetNickname과 다른 nickname을 비교하여 매치 되는것만 으로 배열 만드는 함수 구현~~

         - filtering된 배열의 길이가 1이라면 빈배열 그렇지 않다면 필터링된 배열 리턴

   - 고민했던 부분

     - 일단 연속으로 중복되는 부분을 어떻게 하면 쉽게 찾을 수 있을지에 대해 고민 하였습니다.
     - 그리고 함수와 변수 네이밍을 최대한 잘 만들려고 노력하였습니다.
     - 좀 더 효율적인 방법이 있는지에 대해 고민하고 있습니다.

7. [문제 7](docs/PROBLEM7.md)

   - 요구 기능

     - 친구 그래프 만들기

       - 친구 그래프 빈 객체를 만듭니다.

       - 유저의 이름을 키로 가지고 set 객체를 value로 지정합니다. 그리고 set 객체 안에 친구 등록

---

## 🎯 프로그래밍 요구 사항

- Node.js 14 버전에서 실행 가능해야 한다. **Node.js 14에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

---

## ✏️ 과제 진행 요구 사항

- 미션은 [javascript-onboarding](https://github.com/woowacourse-precourse/javascript-onboarding) 저장소를 Fork & Clone해 시작한다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.
