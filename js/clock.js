const clock = document.querySelector("#clock");
const datePrint = document.querySelector("#date");
const dDay = document.querySelector("#d-day");
const dayOfWeek = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

const date = new Date();

function getClock() {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

function getDate() {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const todayDate = String(date.getDate()).padStart(2, "0");
  const todayDay = dayOfWeek[date.getDay()];

  datePrint.innerText = `${month}월 ${todayDate}일 ${todayDay}`;
}

function getDDay() {
  const lastDay = new Date(date.getFullYear(), 11, 31);
  const leftDay = Math.floor((lastDay - date) / (1000 * 60 * 60 * 24));

  dDay.innerText = `D-${leftDay}`;
}

getDate();
getDDay();
getClock();
setInterval(getClock, 1000);
