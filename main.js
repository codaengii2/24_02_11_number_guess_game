// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 Down
// 랜덤번호 > 유저번호 Up
// Reset 버튼을 누르면 게임리 reset
// 5번의 기회를 다 쓰면 게임종료 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려줌. 기회가 깎이지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려줌. 기회가 깎이지 않는다

let computerNum = 0;
let playBtn = document.getElementById("playBtn");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let resetBtn = document.getElementById("resetBtn");
let chances = 10;
let gameOver = false;
let chanceArea = document.getElementById("chanceArea");
let history = [];

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  //Math.floor는 숫자를 내림하는 함수이기 때문에 +1을 해서 0~99를 1~100까지로 바꿀 수 있음
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100 사이 숫자를 입력해주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다.";
    return;
  }
  chances--;

  chanceArea.textContent = `${chances} 번`;
  if (userValue < computerNum) {
    resultArea.textContent = "Up";
    // console.log("Up");
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down";
    // console.log("Down");
  } else {
    resultArea.textContent = "정답";
    gameOver = ture;
    // console.log("정답");
  }

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playBtn.disabled = true;
  }
}

function reset() {
  //user input 창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();

  resultArea.textContent = "결과값이 여기 나옵니다";
}

pickRandomNum();
