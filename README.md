# 🏎️ 자동차 경주 게임

## 소개

<br/>

자동차의 이름들을 입력 받으면, 그 자동차들이 경주하는 시뮬레이션을 수행하여 우승자를 보여주는 간단한 시뮬레이션 게임입니다(참고로, 우승자는 여러명일 수 있습니다). 이때 모든 자동차들은 조금 특수한(?) 자동차들이라서 앞으로 움직이고 싶다면 엑셀을 매번 새로 밟아서 앞으로 나아가기를 '시도'해야 합니다. 공평성을 위해서 자동차들은 모두 똑같은 시도 횟수를 가집니다. 이 시도 횟수는 여러분이 지정해주실 수 있습니다. 따로 정해진 도착지점은 없으며 우승은 가장 멀리 앞으로 나아간 자동차에게 주어집니다. 참고로, 단순히 경주 결과뿐만 아니라 경주의 진행 과정 또한 보실 수 있습니다.
<br/><br/><div style="text-align: right"> 그럼 게임을 재미있게 즐겨주세요! </div>
<br/><br/>

## 구현 기능 목록

<br/>

### 입력 처리 및 유효성 검사

<br/>
- 자동차 이름 입력값 전처리하기 (preprocess car names input)
- 자동차 이름 입력값 유효성 검사하기 (check car names input)
- 자동차 이름 입력의 어디가 유효하지 않은지를 알아내기 (figure what are the problems of user's car names input)
- 무조건 1 이상의 값이 시도 횟수로 입력되도록 만들기 (force try count input to be more than 1)

<br/>

### 경주 수행하기

<br/>
- 차들과 경주장을 생성하기 (create cars & racecourse)
- 경주 진행하기 (play race game)

<br/>

### 경주 결과 보여주기

<br/>
- 경주 진행과정 보여주기 (show race process)
- 최종 우승자 보여주기 (show winners)
  <br/><br/>

## 게임방법 예시

<br/><br/>

![게임방법](images/result.gif)
