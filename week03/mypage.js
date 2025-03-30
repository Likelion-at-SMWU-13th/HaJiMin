document.addEventListener("DOMContentLoaded", () => {
  const savedNickname = localStorage.getItem("nickname");
  const nicknameElement = document.querySelector(".nickname");

  if (savedNickname && nicknameElement) {
    nicknameElement.textContent = savedNickname;
  }
});
