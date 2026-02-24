(() => {
  const PASSWORD_OK = "pipushin22";

  const input = document.getElementById("password");
  const btn = document.getElementById("btn");
  const banner = document.getElementById("errorBanner");

  function showError(message) {
    banner.textContent = message;
    banner.classList.remove("hidden");
  }

  function hideError() {
    banner.classList.add("hidden");
  }

  function goNext() {
    window.location.href = "player.html";
  }

  function validate() {
    const value = (input.value || "").trim();
    if (value === PASSWORD_OK) {
      hideError();
      goNext();
      return;
    }
    showError("Contraseña incorrecta. Intentá de nuevo.");
    input.focus();
    input.select();
  }

  btn.addEventListener("click", validate);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") validate(); });
  input.addEventListener("input", hideError);

  input.focus();
})();
