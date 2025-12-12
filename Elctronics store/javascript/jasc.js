const toggleButton = document.getElementById("toggle-theme");

if (localStorage.getItem("theme") === "dark")
{
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "🌞";
}

toggleButton.addEventListener("click", () =>
{
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  toggleButton.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});