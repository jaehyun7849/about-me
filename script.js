const buttons = document.querySelectorAll(".detail-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("aria-controls");
    const detail = document.getElementById(targetId);
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    detail.hidden = isOpen;
    button.textContent = isOpen ? "자세히 보기" : "내용 접기";
  });
});
