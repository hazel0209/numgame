let result = document.querySelector("#result");
let user = document.querySelector("#user");
let play = document.querySelector("#play");
let reset = document.querySelector("#reset");
let end = document.querySelector(".end");
let chance = document.querySelector(".chance");
let nums = document.querySelector(".nums");
let computerNum;
let count = 5;
let history = [];

function random() {
  computerNum = Math.floor(Math.random() * 100 + 1);
} //초반 숫자 무작위로 선정
random();
console.log("com", computerNum);

//play에 이벤트를 추가, 클릭 시 새로고침 방지 및 히스토리 정리, 남은 기회 표시, 알림 메시지 등 구성, 엔터 시 자동으로 폼 안이 비워지게끔 함

play.addEventListener("click", (e) => {
  e.preventDefault();

  let userNum = user.value;
  console.log("user", userNum);

  if (history.includes(userNum)) {
    alert("이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.");
    count = count + 1;
  }
  history.push(userNum);
  console.log(history);

  if (userNum != computerNum) {
    count--;
  } else if (userNum == computerNum) {
    end.innerHTML = `축하합니다!<br>게임을 더 즐기고 싶으시다면 재시작 버튼을 눌러주세요.`;
  }

  chance.textContent = `남은 기회: ${count}회`;

  if (count <= 0) {
    play.disabled = true;
    play.style.filter = "grayscale(100%)";
    chance.textContent = `남은 기회: 0회`;
    end.innerHTML = `<p>Game Over!</p><p>정답은 ${computerNum}입니다.</p><p>게임을 더 즐기고 싶으시다면 재시작 버튼을 눌러주세요.</p>`;
  }
  console.log(count);

  if (userNum == computerNum) {
    play.disabled = true;
    play.style.filter = "grayscale(100%)";
    result.src =
      "https://static.vecteezy.com/system/resources/thumbnails/022/000/275/small/hand-painted-approved-sign-free-png.png";
    result.innerHTML = `축하합니다!<br>게임을 더 즐기고 싶으시다면 재시작 버튼을 눌러주세요.`;
  } else if (userNum <= 0 || userNum > 100) {
    alert("1부터 100 사이의 정확한 숫자를 입력해주세요.");
    return;
  } else if (userNum > computerNum) {
    result.src =
      "https://illust.download/wp-content/uploads/download/plata72.png";
  } else if (userNum < computerNum) {
    result.src =
      "https://illust.download/wp-content/uploads/download/plata70.png";
  } else {
    alert("1부터 100 사이의 정확한 숫자를 입력해주세요.");
    return;
  }

  user.value = "";
});
