# slashpage
카페노노 개발자 온라인 테스트 - 김은서

## 요구사항 정의

3대의 엘리베이터가 15층까지 작동하는 시스템이며 각 엘리베이터는 층 호출 버튼을 통해 작동됩니다.

- 각 엘리베이터는 현재 층을 표시해야 한다.
- 엘리베이터는 1층부터 15층까지 이동할 수 있다.
- 층(숫자)을 클릭하면 엘리베이터를 호출할 수 있다.
  - 클릭한 버튼의 숫자가 빨간색으로 변화
- 엘리베이터는 1초에 한 층씩 이동해야 한다.

- 버튼(1층부터 15층까지)을 누르면 작동하지 않는 첫 번째 엘리베이터가 작동한다.
  - 첫 번째 엘리베이터가 작동 중인 경우 두 번째 엘리베이터, 두 번째 엘리베이터도 작동 중일 경우 세 번째 엘리베이터가 작동
- 모든 엘리베이터 작동 중일 경우 호출 버튼은 비활성화되어야 한다.
  - 엘리베이터가 이동을 완료하면 호출 버튼이 다시 활성화
  - 작동 중이면 엘리베이터 칸이 빨간색. 작동이 끝나면 검정색.

## 필수 사항

위의 동영상을 보고 구현된 내용을 파악하여 요구사항을 정의합니다.
요구사항 정의는 프로젝트 루트에 README.md 파일에 기술합니다.
정의된 요구사항에 맞게 타입스크립트로 UI를 구현합니다.
클라이언트에는 React를 필수로 사용해야 합니다.
추가 라이브러리 사용에는 제한이 없습니다.
스타일은 똑같지 않아도 무방합니다.

## 추가 사항

추가 사항은 필수 요소는 아니나 구현 시 가산점을 인정하는 요소입니다.
오프라인에서의 엘리베이터의 경험에 비추어 필수 사항 외에 요구사항을 추가로 정의하고 구현해 보세요.
스타일을 조금 더 완성도 있게 만들어보세요.
