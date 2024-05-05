const youtube = document.querySelector("#youtube");
const google = document.querySelector("#google");
const github = document.querySelector("#github");
const notion = document.querySelector("#notion");
const nomad = document.querySelector("#nomad");

youtube.addEventListener("click", () => {
  location.href = "https://www.youtube.com";
});
google.addEventListener("click", () => {
  location.href = "https://www.google.co.kr/";
});
github.addEventListener("click", () => {
  location.href = "https://github.com/";
});
notion.addEventListener("click", () => {
  location.href = "https://www.notion.so/";
});
nomad.addEventListener("click", () => {
  location.href = "https://nomadcoders.co/";
});
