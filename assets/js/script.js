document.addEventListener("DOMContentLoaded", () => {
  const buttonHeader = document.getElementById("buttonForm");

  buttonHeader.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("contact-form").classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const crossForm = document.getElementById("exit");

  crossForm.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("contact-form").classList.add("hidden");
  });
});
