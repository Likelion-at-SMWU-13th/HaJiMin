document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("save-nickname");
  const input = document.getElementById("nickname");

  saveButton.addEventListener("click", () => {
    const nickname = input.value.trim();

    if (nickname) {
      localStorage.setItem("nickname", nickname);
      alert("닉네임이 저장되었습니다!");
      window.location.href = "mypage.html";
    } else {
      alert("닉네임을 입력해 주세요.");
    }
  });
});
